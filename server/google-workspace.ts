import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

// Google Workspace Service Configuration
class GoogleWorkspaceService {
  private auth: GoogleAuth;
  private sheets: any;
  private drive: any;
  private gmail: any;

  constructor() {
    // Initialize Google Auth with Service Account
    this.auth = new GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/gmail.send'
      ]
    });

    // Initialize Google APIs with proper auth client
    this.initializeAPIs();
  }

  private async initializeAPIs() {
    try {
      const authClient = await this.auth.getClient();
      this.sheets = google.sheets({ version: 'v4', auth: authClient });
      this.drive = google.drive({ version: 'v3', auth: authClient });
      this.gmail = google.gmail({ version: 'v1', auth: authClient });
    } catch (error) {
      console.error('Error initializing Google APIs:', error);
    }
  }

  // Generate unique shareholder ID
  generateShareholderID(): string {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `MKSH-2025-${timestamp}${random}`;
  }

  // Create or get Makamin_Shareholders spreadsheet
  async getOrCreateShareholdersSheet() {
    const SPREADSHEET_NAME = 'Makamin_Shareholders';
    
    try {
      await this.initializeAPIs();
      
      // First try to find existing spreadsheet
      const searchResponse = await this.drive.files.list({
        q: `name='${SPREADSHEET_NAME}' and mimeType='application/vnd.google-apps.spreadsheet'`,
        fields: 'files(id, name)'
      });

      let spreadsheetId;
      
      if (searchResponse.data.files && searchResponse.data.files.length > 0) {
        spreadsheetId = searchResponse.data.files[0].id;
      } else {
        // Create new spreadsheet
        const createResponse = await this.sheets.spreadsheets.create({
          resource: {
            properties: {
              title: SPREADSHEET_NAME
            },
            sheets: [{
              properties: {
                title: 'Shareholders_Database'
              }
            }]
          }
        });
        
        spreadsheetId = createResponse.data.spreadsheetId;
        
        // Add headers to the new spreadsheet
        const headers = [
          'Shareholder ID', 'Full Name', 'Email', 'Phone', 'National ID',
          'Nationality', 'Address', 'City', 'Postal Code', 'Shares Count',
          'Investment Amount', 'Registration Date', 'Status', 'Drive Folder ID'
        ];
        
        await this.sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Shareholders_Database!A1:N1',
          valueInputOption: 'RAW',
          resource: {
            values: [headers]
          }
        });
      }

      return spreadsheetId;
    } catch (error) {
      console.error('Error creating/getting shareholders sheet:', error);
      throw error;
    }
  }

  // Add shareholder to Google Sheets
  async addShareholderToSheet(shareholderData: any) {
    try {
      await this.initializeAPIs();
      const spreadsheetId = await this.getOrCreateShareholdersSheet();
      
      const values = [[
        shareholderData.shareholderId,
        shareholderData.fullName,
        shareholderData.email,
        shareholderData.phone,
        shareholderData.nationalId,
        shareholderData.nationality,
        shareholderData.address,
        shareholderData.city,
        shareholderData.postalCode,
        shareholderData.sharesCount,
        shareholderData.investmentAmount,
        new Date().toISOString().split('T')[0],
        'Pending Review',
        shareholderData.driveFolderId || ''
      ]];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Shareholders_Database!A:N',
        valueInputOption: 'RAW',
        resource: { values }
      });

      return true;
    } catch (error) {
      console.error('Error adding shareholder to sheet:', error);
      throw error;
    }
  }

  // Create shareholder folder in Google Drive
  async createShareholderFolder(shareholderId: string, shareholderName: string) {
    try {
      await this.initializeAPIs();
      
      const folderName = `${shareholderId}_${shareholderName}`;
      
      const folderMetadata = {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID || 'root']
      };

      const folder = await this.drive.files.create({
        resource: folderMetadata,
        fields: 'id'
      });

      // Create subfolders for organization
      const subfolders = ['Documents', 'Certificates', 'Communications'];
      
      for (const subfolder of subfolders) {
        await this.drive.files.create({
          resource: {
            name: subfolder,
            mimeType: 'application/vnd.google-apps.folder',
            parents: [folder.data.id]
          }
        });
      }

      return folder.data.id;
    } catch (error) {
      console.error('Error creating shareholder folder:', error);
      throw error;
    }
  }

  // Send confirmation email to shareholder
  async sendShareholderConfirmation(shareholderData: any) {
    try {
      await this.initializeAPIs();
      
      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">مكامن السعودية القابضة</h1>
            <p style="color: #e5e7eb; margin: 5px 0;">Saudi Makamin Holding Company</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #1e40af;">تأكيد تسجيل المساهم - Shareholder Registration Confirmation</h2>
            
            <p>عزيزي/عزيزتي ${shareholderData.fullName},</p>
            <p>Dear ${shareholderData.fullName},</p>
            
            <p>نتشرف بإبلاغكم بأنه تم استلام طلب تسجيلكم كمساهم في شركة مكامن السعودية القابضة بنجاح.</p>
            <p>We are pleased to confirm that your shareholder registration application has been successfully received.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">تفاصيل التسجيل - Registration Details:</h3>
              <p><strong>رقم المساهم - Shareholder ID:</strong> ${shareholderData.shareholderId}</p>
              <p><strong>الاسم الكامل - Full Name:</strong> ${shareholderData.fullName}</p>
              <p><strong>البريد الإلكتروني - Email:</strong> ${shareholderData.email}</p>
              <p><strong>رقم الهاتف - Phone:</strong> ${shareholderData.phone}</p>
              <p><strong>تاريخ التسجيل - Registration Date:</strong> ${new Date().toLocaleDateString('ar-SA')}</p>
            </div>
            
            <p>سيتم مراجعة طلبكم من قبل فريق الحوكمة وسنقوم بإشعاركم بالنتيجة خلال 3-5 أيام عمل.</p>
            <p>Your application will be reviewed by our governance team and we will notify you of the outcome within 3-5 business days.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #1e40af; font-weight: bold;">للاستفسارات - For inquiries:</p>
              <p>shareholders@makamin.com.sa | +966 56 330 8727</p>
            </div>
          </div>
        </div>
      `;

      const message = [
        'Content-Type: text/html; charset="UTF-8"\r\n',
        'MIME-Version: 1.0\r\n',
        `To: ${shareholderData.email}\r\n`,
        'From: shareholders@makamin.com.sa\r\n',
        'Subject: =?UTF-8?B?' + Buffer.from(`تأكيد تسجيل المساهم - ${shareholderData.shareholderId}`).toString('base64') + '?=\r\n\r\n',
        emailContent
      ].join('');

      const encodedMessage = Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

      await this.gmail.users.messages.send({
        userId: 'me',
        resource: {
          raw: encodedMessage
        }
      });

      return true;
    } catch (error) {
      console.error('Error sending shareholder confirmation:', error);
      throw error;
    }
  }

  // Send internal notification to info@makamin.com.sa
  async sendInternalNotification(shareholderData: any) {
    try {
      await this.initializeAPIs();
      
      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626, #ef4444); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">🔔 إشعار تسجيل مساهم جديد</h1>
            <p style="color: #fed7d7; margin: 5px 0;">New Shareholder Registration Alert</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #dc2626;">تفاصيل المساهم الجديد - New Shareholder Details</h2>
            
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>رقم المساهم:</strong> ${shareholderData.shareholderId}</p>
              <p><strong>الاسم الكامل:</strong> ${shareholderData.fullName}</p>
              <p><strong>البريد الإلكتروني:</strong> ${shareholderData.email}</p>
              <p><strong>رقم الهاتف:</strong> ${shareholderData.phone}</p>
              <p><strong>رقم الهوية:</strong> ${shareholderData.nationalId}</p>
              <p><strong>الجنسية:</strong> ${shareholderData.nationality}</p>
              <p><strong>المدينة:</strong> ${shareholderData.city}</p>
              <p><strong>عدد الأسهم المطلوب:</strong> ${shareholderData.sharesCount}</p>
              <p><strong>مبلغ الاستثمار:</strong> ${shareholderData.investmentAmount} ريال سعودي</p>
              <p><strong>تاريخ التسجيل:</strong> ${new Date().toLocaleString('ar-SA')}</p>
            </div>
            
            <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1e40af;"><strong>إجراءات مطلوبة:</strong></p>
              <ul style="color: #1e40af;">
                <li>مراجعة البيانات والوثائق</li>
                <li>التحقق من الهوية الوطنية</li>
                <li>إعداد ملف المساهم</li>
                <li>إرسال الموافقة أو الرفض</li>
              </ul>
            </div>
            
            <p><strong>تم حفظ البيانات في:</strong></p>
            <ul>
              <li>Google Sheets: Makamin_Shareholders</li>
              <li>Google Drive: مجلد المساهم ${shareholderData.shareholderId}</li>
              <li>Database: shareholders table</li>
            </ul>
          </div>
        </div>
      `;

      const message = [
        'Content-Type: text/html; charset="UTF-8"\r\n',
        'MIME-Version: 1.0\r\n',
        'To: info@makamin.com.sa\r\n',
        'From: shareholders@makamin.com.sa\r\n',
        'Subject: =?UTF-8?B?' + Buffer.from(`🔔 مساهم جديد: ${shareholderData.fullName} - ${shareholderData.shareholderId}`).toString('base64') + '?=\r\n\r\n',
        emailContent
      ].join('');

      const encodedMessage = Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

      await this.gmail.users.messages.send({
        userId: 'me',
        resource: {
          raw: encodedMessage
        }
      });

      return true;
    } catch (error) {
      console.error('Error sending internal notification:', error);
      throw error;
    }
  }

  // Complete shareholder registration process
  async processShareholderRegistration(shareholderData: any) {
    try {
      // Generate unique shareholder ID
      const shareholderId = this.generateShareholderID();
      const completeData = { ...shareholderData, shareholderId };

      // Step 1: Create folder in Google Drive
      const driveFolderId = await this.createShareholderFolder(shareholderId, shareholderData.fullName);
      completeData.driveFolderId = driveFolderId;

      // Step 2: Add to Google Sheets
      await this.addShareholderToSheet(completeData);

      // Step 3: Send confirmation email to shareholder
      await this.sendShareholderConfirmation(completeData);

      // Step 4: Send internal notification
      await this.sendInternalNotification(completeData);

      return {
        success: true,
        shareholderId,
        driveFolderId,
        message: 'Shareholder registration completed successfully'
      };
    } catch (error) {
      console.error('Error processing shareholder registration:', error);
      throw error;
    }
  }
}

export const googleWorkspaceService = new GoogleWorkspaceService();