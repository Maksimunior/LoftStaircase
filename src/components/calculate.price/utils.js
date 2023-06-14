export function Reducer(state, action) {
    switch (action.type) {
        case 'changed_Environment': {
            return {
                environment: action.nextName,
                envType: state.envType,
                perila: state.perila,
                stairs: state.stairs,
                width: state.width,
                height: state.height,
                phone: state.phone
            };
        }
        case 'changed_EnvType': {
            return {                
                environment: state.environment,
                envType: action.nextName,
                perila: state.perila,
                stairs: state.stairs,
                width: state.width,
                height: state.height,
                phone: state.phone
            };
        }
        case 'changed_perila': {
            return {
                environment: state.environment,
                envType: state.envType,
                perila: action.nextName,
                stairs: state.stairs,
                width: state.width,
                height: state.height,
                phone: state.phone
            };
        }
        case 'changed_stairs': {
            return {
                environment: state.environment,
                envType: state.envType,
                perila: state.perila,
                stairs: action.nextName,
                width: state.width,
                height: state.height,
                phone: state.phone
            };
        }
        case 'changed_width': {
            return {
                environment: state.environment,
                envType: state.envType,
                perila: state.perila,
                stairs: state.stairs,
                width: action.nextName,
                height: state.height,
                phone: state.phone
            };
        }
        case 'changed_height': {
            return {
                environment: state.environment,
                envType: state.envType,
                perila: state.perila,
                stairs: state.stairs,
                width: state.width,
                height: action.nextName,
                phone: state.phone
            };
        }
        case 'changed_phone': {
            return {
                environment: state.environment,
                envType: state.envType,
                perila: state.perila,
                stairs: state.stairs,
                width: state.width,
                height: state.height,
                phone: action.nextName
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
  }
