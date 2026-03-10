export type RecordStatus = 'Verified' | 'Partially Documented' | 'Referenced in Records';

export interface MarineAsset {
  id: string;
  assetName: string;
  ownerOrOperator?: string;
  assetType: string;
  role?: string;
  relatedProject?: string;
  client?: string;
  dateFrom?: string;
  dateTo?: string;
  contractValue?: string;
  currency?: string;
  recordStatus: RecordStatus;
  notes?: string;
}

export const marineAssets: MarineAsset[] = [
  {
    id: 'jaya-centurion',
    assetName: 'Jaya Centurion',
    ownerOrOperator: 'Jaya / Mermaid Australia',
    assetType: 'Platform Support Vessel',
    relatedProject: 'Full Charter of Platform Vessel',
    client: 'Saudi Aramco',
    dateFrom: '2013-12-15',
    dateTo: '2018-12-14',
    contractValue: '152,589,619',
    currency: 'SAR',
    recordStatus: 'Verified',
    notes: 'Full charter platform support vessel',
  },
  {
    id: 'jaya-chieftain',
    assetName: 'Jaya Chieftain',
    ownerOrOperator: 'Jaya / Mermaid Australia',
    assetType: 'Platform Support Vessel',
    relatedProject: 'Full Charter of Platform Vessel',
    client: 'Saudi Aramco',
    dateFrom: '2013-12-15',
    dateTo: '2018-12-14',
    contractValue: '152,589,619',
    currency: 'SAR',
    recordStatus: 'Verified',
  },
  {
    id: 'jaya-concordia',
    assetName: 'Jaya Concordia',
    ownerOrOperator: 'Jaya',
    assetType: 'Platform Support Vessel',
    relatedProject: 'Full Charter of Platform Vessel',
    client: 'Saudi Aramco',
    dateFrom: '2013-12-15',
    dateTo: '2018-12-14',
    contractValue: '152,589,619',
    currency: 'SAR',
    recordStatus: 'Verified',
  },
  {
    id: 'arkstar-voyager',
    assetName: 'Arkstar Voyager',
    ownerOrOperator: 'Arkstar',
    assetType: 'Offshore Platform Vessel',
    relatedProject: 'Full Charter of Platform Vessel',
    client: 'Saudi Aramco',
    dateFrom: '2013-12-15',
    dateTo: '2018-12-14',
    contractValue: '165,687,279',
    currency: 'SAR',
    recordStatus: 'Verified',
  },
  {
    id: 'posh-pelican',
    assetName: 'Posh Pelican',
    ownerOrOperator: 'POSH Semco',
    assetType: 'Offshore Platform Vessel',
    relatedProject: 'Full Charter of Platform Vessel',
    client: 'Saudi Aramco',
    dateFrom: '2013-12-22',
    dateTo: '2018-12-22',
    contractValue: '168,022,914',
    currency: 'SAR',
    recordStatus: 'Verified',
  },
  {
    id: 'belait-barakah',
    assetName: 'Belait Barakah',
    ownerOrOperator: 'Belait Shipping',
    assetType: 'Accommodation / Security Vessel',
    relatedProject: 'Security Accommodation Vessel',
    client: 'Saudi Aramco',
    dateFrom: '2014-04-01',
    dateTo: '2019-03-31',
    contractValue: '340,409,950',
    currency: 'SAR',
    recordStatus: 'Verified',
  },
  {
    id: 'zakher-crest',
    assetName: 'Zakher Crest',
    ownerOrOperator: 'Zakher Marine Services',
    assetType: 'Security / Logistic Vessel',
    relatedProject: 'Security & Marine Logistics',
    client: 'Saudi Aramco',
    recordStatus: 'Partially Documented',
    notes: 'Duration/value not fully specified; within fleet contracts',
  },
  {
    id: 'makamin-1',
    assetName: 'Makamin 1',
    ownerOrOperator: 'Makamin Petroleum Services',
    assetType: 'Security Patrol Boat',
    relatedProject: 'Interceptor Vessel Program',
    client: 'Saudi Aramco',
    dateFrom: '2015-01-01',
    dateTo: '2019-12-31',
    contractValue: '29,893,500',
    currency: 'SAR',
    recordStatus: 'Verified',
  },
  {
    id: 'ansar-3',
    assetName: 'Ansar 3',
    ownerOrOperator: 'Makamin Petroleum Services',
    assetType: 'Security Patrol Boat',
    relatedProject: 'Interceptor Vessel Program',
    client: 'Saudi Aramco',
    dateFrom: '2015-01-01',
    dateTo: '2019-12-31',
    contractValue: '29,893,500',
    currency: 'SAR',
    recordStatus: 'Verified',
    notes: 'Ownership referenced in 2015 report',
  },
  {
    id: 'jaya-pearl',
    assetName: 'Jaya Pearl',
    ownerOrOperator: 'MOS IES Pearl Pte Ltd (Singapore JV)',
    assetType: 'Offshore Vessel',
    relatedProject: 'NPCC Contract',
    client: 'NPCC',
    dateTo: '2015-10-31',
    recordStatus: 'Partially Documented',
    notes: 'Joint ownership via Singapore JV; value not specified',
  },
  {
    id: 'makamin-10',
    assetName: 'Makamin 10',
    ownerOrOperator: 'Makamin Offshore',
    assetType: 'Offshore Vessel',
    relatedProject: 'Referenced in execution records',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'makamin-302',
    assetName: 'Makamin 302',
    ownerOrOperator: 'Makamin Offshore',
    assetType: 'Offshore Vessel',
    relatedProject: 'Referenced in execution records',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'ansar',
    assetName: 'Ansar',
    ownerOrOperator: 'Makamin Offshore',
    assetType: 'Offshore Vessel',
    relatedProject: 'Referenced in records',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'manar',
    assetName: 'Manar',
    ownerOrOperator: 'Makamin Offshore',
    assetType: 'Offshore Vessel',
    relatedProject: 'Referenced in records',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'mma-chieftain',
    assetName: 'MMA Chieftain',
    ownerOrOperator: 'MMA Offshore',
    assetType: 'Platform Vessel',
    relatedProject: 'Associated with MOS contracts',
    client: 'Saudi Aramco',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'mma-centurion',
    assetName: 'MMA Centurion',
    ownerOrOperator: 'MMA Offshore',
    assetType: 'Platform Vessel',
    relatedProject: 'Associated with MOS contracts',
    client: 'Saudi Aramco',
    recordStatus: 'Referenced in Records',
    notes: 'Potentially linked in later records; do not state identity equivalence as fact',
  },
  {
    id: 'mkn-203',
    assetName: 'MKN 203',
    assetType: 'Offshore Vessel',
    relatedProject: 'Referenced in analytical records',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'vzmorye-2007',
    assetName: 'Vzmorye (2007)',
    assetType: 'Offshore Vessel',
    relatedProject: 'Referenced in analytical records',
    recordStatus: 'Referenced in Records',
  },
  {
    id: 'makamin-3',
    assetName: 'Makamin 3',
    ownerOrOperator: 'Makamin Offshore',
    assetType: 'Offshore Vessel',
    relatedProject: 'IMO 9807413',
    recordStatus: 'Partially Documented',
  },
];

export function getVerifiedAssets(): MarineAsset[] {
  return marineAssets.filter(a => a.recordStatus === 'Verified');
}

export function getAssetsByStatus(status: RecordStatus): MarineAsset[] {
  return marineAssets.filter(a => a.recordStatus === status);
}
