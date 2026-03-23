const GAS_URL = process.env.GAS_SUBMIT_URL ?? "";
const GAS_SECRET = process.env.MAKAMIN_GAS_SECRET ?? "";

export interface GasSubmitResult {
  success: boolean;
  requestId?: string;
  status?: string;
  emailSent?: boolean;
  error?: string;
}

export interface GasTrackResult {
  found: boolean;
  requestId?: string;
  status?: string;
  submittedAt?: string;
  shareholderMessage?: string;
}

export async function relaySubmitToGas(fields: Record<string, string | boolean>): Promise<GasSubmitResult> {
  if (!GAS_URL || !GAS_SECRET) {
    console.error("GAS relay: GAS_SUBMIT_URL or MAKAMIN_GAS_SECRET not configured");
    return { success: false, error: "GAS integration not configured" };
  }

  const payload = { ...fields, _secret: GAS_SECRET, action: "submit" };

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30_000);

    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!response.ok) {
      const text = await response.text().catch(() => "(unreadable)");
      console.error(`GAS relay: HTTP ${response.status} — ${text}`);
      return { success: false, error: `GAS returned HTTP ${response.status}` };
    }

    const data = await response.json() as GasSubmitResult;
    return data;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("GAS relay network error:", msg);
    return { success: false, error: msg };
  }
}

export async function relayTrackToGas(
  requestId: string,
  email?: string,
  mobile?: string,
): Promise<GasTrackResult> {
  if (!GAS_URL || !GAS_SECRET) {
    return { found: false };
  }

  const payload = {
    _secret: GAS_SECRET,
    action: "track",
    requestId,
    ...(email ? { email } : {}),
    ...(mobile ? { mobile } : {}),
  };

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15_000);

    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!response.ok) {
      console.error(`GAS track relay: HTTP ${response.status}`);
      return { found: false };
    }

    const data = await response.json() as GasTrackResult;
    return data;
  } catch (err) {
    console.error("GAS track relay error:", err instanceof Error ? err.message : err);
    return { found: false };
  }
}
