import GradeReporter from './GradeReporter';
import SampleReport from './sample-report.json';

describe('GradeReporter', () => {
  describe('getStudentReportsBySubject()', () => {
    it('should return an empty array when report is missing', () => {

    });

    it('should return an empty array when report is empty', () => {

    });

    describe('with reports', () => {
      it('should always return an array of StudentReports', () => {

      });

      it('should return a StudentReport for every subject', () => {

      });

      it('should return a StudentReport for every student', () => {

      });
    });
  });

  describe('getStudentReports()', () => {
    it('should always format student reports', () => {

    });

    it('should return formatted student reports in ASCENDING order', () => {

    });
  });

  describe('with AIC sample data', () => {
    it('should return the expected output', () => {
      const { report } = SampleReport;

      const results = GradeReporter.getStudentReports(report);
      expect(results.length).toBe(3);

      expect(results[0]).toEqual('COM B rit2011020 Samantha');
      expect(results[1]).toEqual('DSA A rit2011001 Julia');
      expect(results[2]).toEqual('DSA A rit2011020 Samantha');
    });
  });
});
