# RN Upload APK to Slack

The file for GH Actions is located at `.github/workflows`

## Before start

Makesure you have already create bot for perform upload apk to slack [Create App](https://api.slack.com/apps).
<br />
Please refer this link [Getting Started with Bolt for Javascript](https://slack.dev/bolt-js/tutorial/getting-started) (Just follow for step 1 & 2 only).

After create bot, copy your <b>Oauth Token</b> at `Features/OAuth & Permissions` and <b>Signing Secret at `Basic Information/App Credentials`</b>. 

Go to your <b>repository settings</b>, then `Security/Secrets/Actions`. Create following new secrets based on your copy tokens before:

```
SLACK_SIGNING_TOKEN
Slack_TOKEN
```

Last, go to your <b>Slack Channels, makesure you already invite your bot</b>. If not, type this command at the channel:

```
/invite @bot_name
```

## Start CI/CD
Now you can start your CI/CD by following this tutorial. Thank you for reading

> Note: In this repository, i am upload my release keystore. I am still don't know how to place release keystore at somewhere at github