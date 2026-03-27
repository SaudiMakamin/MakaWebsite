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
      const errorCode = response.status === 413
        ? "upstream_payload_too_large"
        : response.status >= 500
          ? "upstream_server_error"
          : "upstream_rejected";
      return { success: false, error: errorCode };
    }

    // Inspect content-type before parsing — GAS may return HTML on auth/config failure
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      const preview = await response.text().catch(() => "(unreadable)");
      console.error(
        `GAS relay: expected JSON but got "${contentType}" — preview: ${preview.slice(0, 300)}`
      );
      return { success: false, error: "upstream_non_json" };
    }

    const data = await response.json() as GasSubmitResult;

    // Defensive: success=true with no requestId is an invalid response — reject it
    if (data.success === true && !data.requestId?.trim()) {
      console.error("GAS relay: success=true but requestId missing or empty — treating as failure");
      return { success: false, error: "upstream_missing_requestid" };
    }

    return data;
  } catch (err) {
    // Classify error type for logging; never expose raw upstream details to caller
    const raw = err instanceof Error ? err.message : String(err);
    if (raw.includes("abort") || raw.toLowerCase().includes("timeout")) {
      console.error("GAS relay: request timed out");
      return { success: false, error: "upstream_timeout" };
    }
    console.error("GAS relay network error:", raw);
    return { success: false, error: "upstream_network" };
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
