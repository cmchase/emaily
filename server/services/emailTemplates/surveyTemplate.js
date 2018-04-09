const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body style="test-align: center">
        <h3>We want your input</h3>
        <p>Please answer the following question</p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes!</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No?</a>
        </div>
      </body>
    </html>
  `;
};
