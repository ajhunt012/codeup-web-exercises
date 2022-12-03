// Following GitHub docs formatting:
// https://developer.github.com/v3/repos/#list-organization-repositories
const result = await request("GET /orgs/{org}/repos", {
    headers: {
        authorization: PERSONAL_ACCESS_TOKEN,
    },
    org: "octokit",
    type: "private",
});

console.log(`${result.data.length} repos found.`);


// const result = await request({
//     method: "GET",
//     url: "/orgs/{org}/repos",
//     headers: {
//         authorization: "token 0000000000000000000000000000000000000001",
//     },
//     org: "octokit",
//     type: "private",
// });

// function octokit(){
//     return GET('/users/{username}/events/public{?per_page,page').then(
//         response => {
//             return response.json().then((data) =>{
//                 console.log(response);
//             })
//         }
//     )
// }







wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));