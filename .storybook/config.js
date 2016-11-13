/* eslint global-require:0 */
import 'bootstrap/dist/css/bootstrap.css'
import {configure} from '@kadira/storybook'

function loadStories() {
  require('../src/screens/user/index.example')
  require('../src/screens/user/components/repo-list.example')
  require('../src/screens/user/components/profile.example')
}

configure(loadStories, module)
