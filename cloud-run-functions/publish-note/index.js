const functions = require("@google-cloud/functions-framework");

functions.http("publishNote", async (req, res) => {
    const config = {
      owner: 'tomnagengast',
      repo: 'notes',
      token: process.env.GITHUB_TOKEN
    };

    const response = await fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/commits?per_page=1`, {
        headers: {
            'Authorization': `Bearer ${config.token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    const commits = await response.json();
    const lastCommitDate = commits[0].commit.author.date;
    const lastCommitAuthor = commits[0].commit.author.name;

    const msg = `
    Hello ${req.query.name || req.body.name || "World"}!
    You sent: ${JSON.stringify(req.body)}
    Last commit for ${config.owner}/${config.repo} was at ${lastCommitDate} by ${lastCommitAuthor}
    `
    res.send(msg);
});
