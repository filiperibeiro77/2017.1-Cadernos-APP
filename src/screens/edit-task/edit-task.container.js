import { connect } from 'react-redux'
import EditTask from './edit-task.component'

import { Actions } from 'react-native-router-flux';
import { asyncEditSingleTask } from '../../actions/single-task-actions';
import { taskUpdate } from '../../actions/tasks-actions';

const mapStateToProps = (state) => {
  console.log(state.singleTask);

  return {
    task: state.singleTask
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask(taskData) {
      const callback = (updatedTask) => {
        dispatch(taskUpdate(updatedTask));
      }

      dispatch(asyncEditSingleTask(taskData, callback));
      Actions.pop({ refresh: taskData }); // Go back to ViewBook
    }
  }
}

const EditTaskContainer = connect(mapStateToProps, mapDispatchToProps)(EditTask);
export default EditTaskContainer;
