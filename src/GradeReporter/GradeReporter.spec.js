import GradeReporter from './GradeReporter';
import StudentReport from './components/StudentReport/StudentReport';

import SampleReport from './sample-report.json';
const [studentWith1Subject, studentWith2Subjects] = SampleReport.report;

describe('GradeReporter', () => {
  describe('getStudentReportsBySubject()', () => {
    it('should return an empty array when report is missing', () => {
      const result = GradeReporter.getStudentReportsBySubject();

      expect(result).toEqual(expect.any(Array));
      expect(result.length).toBe(0);
    });

    it('should return an empty array when report is empty', () => {
      const report = [];
      const result = GradeReporter.getStudentReportsBySubject(report);

      expect(result).toEqual(expect.any(Array));
      expect(result.length).toBe(0);
    });

    describe('with reports', () => {
      it('should return a StudentReport for every subject', () => {
        const students = [studentWith2Subjects];
        const result = GradeReporter.getStudentReportsBySubject(students);

        expect(result).toEqual(expect.any(Array));
        expect(result.length).toBe(2);

        expect(result[0]).toBeInstanceOf(StudentReport);
        expect(result[1]).toBeInstanceOf(StudentReport);
      });

      it('should return a StudentReport for every student', () => {
        const { report: students } = SampleReport;
        const result = GradeReporter.getStudentReportsBySubject(students);

        expect(result).toEqual(expect.any(Array));
        expect(result.length).toBe(3);

        expect(result[0]).toBeInstanceOf(StudentReport);
        expect(result[1]).toBeInstanceOf(StudentReport);
        expect(result[2]).toBeInstanceOf(StudentReport);

        // @hack quick way to check for both names
        const names = result.map(r => r.name);
        expect(names).toContain('Julia');
        expect(names).toContain('Samantha');
      });
    });
  });

  describe('getStudentReports()', () => {
    it('should always format student reports', () => {

    });

    it('should return formatted student reports in ASCENDING order', () => {

    });
  });

  describe('with sample input data', () => {
    it('should return the expected output', () => {
      const { report } = SampleReport;

      const results = GradeReporter.getStudentReports(report);
      expect(results.length).toBe(3);

      expect(results).toEqual([
        'COM B rit2011020 Samantha',
        'DSA A rit2011001 Julia',
        'DSA A rit2011020 Samantha'
      ]);
    });
  });
});
