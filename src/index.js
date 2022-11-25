import './css/styles.css';
import { onSearch } from './js/modules/search-module';
import { refs } from './js/modules/refs';

refs.searchFormRef.addEventListener('submit', onSearch);
