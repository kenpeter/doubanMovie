/**
 * @author monkeywang
 * Date: 17/3/27
 */

// so we import vue here
import Vue from 'vue'

// It is an import
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
// button, select
// dropdown, d_menu, d_item
// input, loading, rate
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

// each item in var
for (let item in variable) {
  // var has this prop??
  if (variable.hasOwnProperty(item)) {
    // so vue use it
    Vue.use(variable[item])
  }
}

// now export vue
export default Vue
