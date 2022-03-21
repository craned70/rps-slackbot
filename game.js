import App from "@slack/bolt";

const app = new App({
    token: ProcessingInstruction.env.SLACK_BOT_TOKEN,
    signingSecret: ProcessingInstruction.env.SLACK_SIGNING_SECRET
});

(async () => {
    await app.start(process.env.PORT || 3000);
})