/**
 *  Hi team,
 *
 *  I chose to submit my answers in JavaScript.
 *  This means this code won't be able to run in HackerRank.
 *  I hope this is acceptable and am sorry for any inconvenience!
 *
 */

;(() => {
  const getStudentReports = (student = {}) => {
    const { enrollment, name, subject } = student;
    const createStudentReport = ({ code, grade }) =>
      ({ code, grade, enrollment, name });

    return subject.map(createStudentReport);
  };

  const formatStudentReport = ({ code, grade, enrollment, name }) =>
    `${code} ${grade} ${enrollment} ${name}`;

  const getStudentReportsAnswer = ({ report }) => {
    const reports = report.reduce((acc, student) => {
      const studentReports = getStudentReports(student) || [];
      return [...acc, ...studentReports];
    }, []);

    return reports
      .map(formatStudentReport)
      .sort();
  };

  const sampleReport = {
    "report": [
      {
        "enrollment": "rit2011001",
        "name": "Julia",
        "subject": [
          { "code": "DSA", "grade": "A" }
        ]
      },
      {
        "enrollment": "rit2011020",
        "name": "Samantha",
        "subject": [
          { "code": "COM", "grade": "B" },
          { "code": "DSA", "grade": "A" }
        ]
      }
    ]
  };

  getStudentReportsAnswer(sampleReport)
    .forEach(studentReport => console.log(studentReport));

})();