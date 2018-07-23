import { Filter } from './Filter';

export const FILTERS: Filter[] = [
  { name: 'size', value: '', type: 'sizes', operation:'AND',filters:[
    { name: '1', value: '1', type: '', operation:'',filters:null},
    { name: '2', value: '2',type: '', operation:'',filters:null}
  ]},
  { name: 'color', value: '', type: 'color', operation:'OR',filters:[
    { name: 'red', value: 'red', type: '', operation:'',filters:null},
    { name: 'green', value: 'green', type: '', operation:'',filters:null}
  ]}
     
]  