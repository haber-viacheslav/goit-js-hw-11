import './css/styles.css';
import { onSearch } from './js/modules/search-module';
import { refs } from './js/modules/refs';
import './js/modules/intersec-observer-api';
import './js/modules/theme';

refs.searchFormRef.addEventListener('submit', onSearch);
