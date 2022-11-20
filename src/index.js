import './css/styles.css';
import debounce from 'lodash.debounce';
import { onSearch } from './js/modules/search-module';
import { refs } from './js/modules/refs';
const DEBOUNCE_DELAY = 300;

refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
