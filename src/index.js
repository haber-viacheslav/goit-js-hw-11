import './css/styles.css';
import { onSearch } from './js/modules/search-module';
import { refs } from './js/modules/refs';
import './js/modules/intersec-observer-api';

refs.searchFormRef.addEventListener('submit', onSearch);
