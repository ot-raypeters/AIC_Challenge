class StudentReport {
  constructor(student = {}, subject = {}) {
    const { code, grade } = subject;
    const { enrollment, name } = student;
    Object.assign(this, { code, grade, enrollment, name });
  }

  static create(student, subject) {
    return new StudentReport(student, subject);
  }

  format() {
    return `${this.code} ${this.grade} ${this.enrollment} ${this.name}`;
  }
}

export default StudentReport;
