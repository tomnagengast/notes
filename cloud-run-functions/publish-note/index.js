const functions = require("@google-cloud/functions-framework");
// const { Octokit } = require('@octokit/rest');

functions.http("publishNote", async (req, res) => {
    const config = {
      owner: 'tomnagengast',
      repo: 'notes',
      token: process.env.GITHUB_TOKEN
    };

    // const octokit = new Octokit({
    //     auth: config.token
    // });

    // const lastCommit = await octokit.rest.repos.listCommits({
    //     owner: config.owner,
    //     repo: config.repo,
    //     per_page: 1
    // });
    // const lastCommitDate = lastCommit.data[0].commit.author.date;
    const lastCommitDate = "timestamp"

    const msg = `
    Hello ${req.query.name || req.body.name || "World"}!
    You sent: ${JSON.stringify(req.body)}
    Last commit for ${config.owner}/${config.repo} was at ${lastCommitDate}
    `
    res.send(msg);
});
