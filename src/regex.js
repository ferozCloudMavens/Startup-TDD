module.exports = function RegexFunc() {
  //var re = /event=\"\w+ [A-Z_\d]{2,}.* \d+ rows.*"/;
  var re = /event="\w+ [\w+].* \d+ rows \(\d*\.\d* secs\)/;

  var connectString = new Array();
  connectString[0] = 'event="Contact QUERY ↷SALESFORCE 122 rows (0.51 secs)"';
  console.log(re.exec(connectString[0]));
  return re.test(connectString[0]);
}
