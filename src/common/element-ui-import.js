/**
 * @author monkeywang
 * Date: 17/3/27
 */

// so we import vue here
import Vue from 'vue'

// element ui, we have
// button, select,
// dropdown,
// dropdown_menu
// Dropdown_item
// Input
// Loading
// Rating
import
{
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Loading,
  Rate
} from 'element-ui'

// variable corresponding....
let variable = {
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Loading,
  Rate
}

for (let item in variable) {
  if (variable.hasOwnProperty(item)) {
    Vue.use(variable[item])
  }
}

export default Vue
