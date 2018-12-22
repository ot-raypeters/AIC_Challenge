import StudentReport from './components/StudentReport/StudentReport';

class GradeReporter {
  static getStudentReportsBySubject(students = []) {
    return students.reduce((acc, student) => {
      const studentReports = StudentReport.getReportsByStudent(student);
      return [...acc, ...studentReports];
    }, []);
  }

  static getStudentReports(students = []) {
    return GradeReporter.getStudentReportsBySubject(students)
      .map(studentReport => studentReport.format())
      .sort();
  }
};

export default GradeReporter;