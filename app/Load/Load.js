export default function LoadPost(){
 const posts =  fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
}
