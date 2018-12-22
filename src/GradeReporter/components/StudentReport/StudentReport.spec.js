import StudentReport from './StudentReport';
import SampleReport from '../../sample-report.json';

const sampleStudent = SampleReport.report[0];
const sampleSubject = sampleStudent.subject[0];

describe('StudentReport', () => {
  describe('create()', () => {
    it('should inherit "code" from subject.code', () => {
      const expectedCode = sampleSubject.code;

      const result = StudentReport.create(sampleStudent, sampleSubject);
      expect(result.code).toEqual(expectedCode);
    });

    it('should inherit "grade" from subject.grade', () => {
      const expectedGrade = sampleSubject.grade;

      const result = StudentReport.create(sampleStudent, sampleSubject);
      expect(result.grade).toEqual(expectedGrade);
    });

    it('should inherit "enrollment" from student.enrollment', () => {
      const expectedEnrollment = sampleStudent.enrollment;

      const result = StudentReport.create(sampleStudent, sampleSubject);
      expect(result.enrollment).toEqual(expectedEnrollment);
    });

    it('should inherit "name" from student.name', () => {
      const expectedName = sampleStudent.name;

      const result = StudentReport.create(sampleStudent, sampleSubject);
      expect(result.name).toEqual(expectedName);
    });
  });

  describe('getReportsByStudent()', () => {
    it('should return a StudentReport for every subject', () => {
      const sampleStudentWith2Subjects = SampleReport.report[1];
      const result = StudentReport.getReportsByStudent(sampleStudentWith2Subjects);

      expect(result.length).toBe(2);
      expect(result[0]).toBeInstanceOf(StudentReport);
      expect(result[1]).toBeInstanceOf(StudentReport);
    });
  });

  describe('format()', () => {
    it('should return a string formatted by "{{code}} {{grade}} {{enrollment}} {{name}}"', () => {
      const studentReport = StudentReport.create(sampleStudent, sampleSubject);
      const { code, grade, enrollment, name } = studentReport;
      const expectedResult = `${code} ${grade} ${enrollment} ${name}`;

      const result = studentReport.format();
      expect(result).toEqual(expectedResult)
    });
  });
});
