const BASE_LOCAL = 'http://localhost:8080';

export const config = {
  all_course_API: BASE_LOCAL + '/course/getAll',
  apiUrl: BASE_LOCAL,
  requestAuthorization: 'Basic dmlzLXBvcnRhbDp2aXMtcG9ydGFsQDEyMw==',
  contentType: 'application/x-www-form-urlencoded',
  session: 'session_token',
  currentUser: 'currentUser',
  timeoutToast: 3000
}
