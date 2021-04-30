import { combineReducers } from 'redux';

import projects from './projects';
import auth from './auth';
import project from './project';
import organization from './organization';
import organizations from './organizations';
import user from './user';
import flashMessages from './flashMessages';
import stickyMessages from './stickyMessages';
import issues from './issues';

export default combineReducers({
  projects: projects,
  auth: auth,
  project: project,
  user: user,
  flashMessages: flashMessages,
  organization: organization,
  organizations: organizations,
  stickyMessages: stickyMessages,
  issues: issues
});