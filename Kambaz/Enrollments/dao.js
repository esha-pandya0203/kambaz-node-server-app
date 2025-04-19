import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  const index = enrollments.findIndex(
    (e) => e.user === userId && e.course === courseId
  );
  // const index = enrollments.findIndex(e => e._id === enrollmentId);
  if (!index) {
    const [removed] = enrollments.splice(index, 1);
    return removed;
  }
  return null;
}

export function getEnrollments() {
  return Database.enrollments;
}

export function getEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  const enrollmentsForUser = enrollments.filter((e) => e.user === userId);
  return enrollmentsForUser;
}
