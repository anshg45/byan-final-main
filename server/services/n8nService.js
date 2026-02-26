import axios from 'axios';

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

/**
 * Triggers an n8n webhook with the provided data.
 * @param {string} event - The type of event (e.g., 'signup', 'analysis').
 * @param {object} data - The payload to send.
 */
export const triggerN8nWebhook = async (event, data) => {
  if (!N8N_WEBHOOK_URL) {
    console.log("⚠️ N8N_WEBHOOK_URL not set, skipping automation.");
    return;
  }

  try {
    await axios.post(N8N_WEBHOOK_URL, {
      event,
      timestamp: new Date().toISOString(),
      ...data
    });
    console.log(`✅ n8n Webhook triggered for event: ${event}`);
  } catch (error) {
    console.error("❌ Failed to trigger n8n webhook:", error.message);
  }
};
