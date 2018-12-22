import StudentReport from './components/StudentReport/StudentReport';

class GradeReporter {
  static getStudentReportsBySubject(report = []) {
    return report.reduce((acc, student) => {
      const toStudentReport = StudentReport.create.bind(this, student);
      const studentReports = student.subject.map(toStudentReport) || [];
      return [...acc, ...studentReports];
    }, []);
  }

  static getStudentReports(report = []) {
    return GradeReporter.getStudentReportsBySubject(report)
      .map(studentReport => studentReport.format())
      .sort();
  }
};

export default GradeReporter;