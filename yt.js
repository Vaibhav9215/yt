// // a. Name of Playlist,view
// // b. Total No of videos : 792
// // c. actual No of videos :783
// // d. Total length of playlist : 12 hours, 9 minutes, 12 seconds
// // At 1.25x : 9 hours, 43 minutes, 21 seconds

// // At 1.50x : 8 hours, 6 minutes, 8 seconds
// // At 1.75x : 6 hours, 56 minutes, 41 seconds
// // At 2.00x : 6 hours, 4 minutes, 36 seconds
// // Average length of video : 29 minutes, 10 seconds

// // e. console.table of video number,name,time



// // Current Task : name of playlist ,views,total videos, 

// const puppeteer = require("puppeteer");
// let page;
// (async function fn() {
//     let browser = await puppeteer.launch({
//         headless: false, defaultViewport: null,
//         args: ["--start-maximized"],
//     })
//     page = await browser.newPage();
//     await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
//     await page.waitForSelector('h1[id="title"]');
//     //first element
//     let element = await page.$('h1[id="title"]');
//     let value = await page.evaluate(function cb(element){
//         return element.textContent;
//     }
//     //all occurences F

//     //.circle.style-scope.tp-yt-paper-spinner



//     //21
//     , element);
//     console.log("Title", value)
//     let someList = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
//     value = await page.evaluate(
//         function(element){
//             return element.textContent }, someList[5]);
//             console.log("videos", value)
//         //no of views-> playlist
//         views = await page.evaluate(
//         function(element){
//             return element.textContent}, someList[6]);
//             console.log("views" , views)
//  //list first 100 videos console.table => of video number, name,//time
//           let timeList= await page.$$("span[id='text']");
//             console.log(timeList.length);
//             let videoNameElementList= await page.$$("a[id='video-title']");
//             console.log("videoNameElementList" , videoNameElementList.length);
//             let videosArr= [];
//             for(let i = 0; i < timeList.length;i++){
//                 let timeNTitleObj = page.evaluate(getTimeandTittle, timeList[i], videoNameElementList){
//                 page.evaluate(function(element1, element2){
//                 page.evaluate(function(element1, element2){
//                     return{
//                         time:element1.textContent.trim();
//                         title:element2.textContent.trim();
//                     }
//                 })
//             }
//         })();
       
// //         let obj = await page.evaluate(consoleFn,
// //             "#stats .style-scope.ytd-playlist-sidebar-primary-info-renderer");
        
// //         let noOfSupposedVideos = obj.noOfVideos.split(" ")[0];
// //         // // scroll
// //         let cvideosLength = await getCVideosLength();
// //         while (noOfSupposedVideos - cvideosLength >= 20) {
// //             // console.log(cvideosLength);   
// //             await scrollToBottom();
// //             cvideosLength = await getCVideosLength();
// //         }
// //         let list = await getStats();
// //         // let pdfDoc = new PDFDocument;
// //         // pdfDoc.pipe(fs.createWriteStream('playlist.pdf'));
// //         // pdfDoc.text(JSON.stringify(list));
// //         // pdfDoc.end();
// //         // // #video-title
// //         // playlist Name
// //         //  -> 100 videos ->load
// //         // Total videos
// //         // views
// //    // } 
// //     // catch (err) {
// //     //     console.log(err);
// //     // }
// // })();
// // function consoleFn(selector) {
// //     let allElems = document.querySelectorAll(selector);
// //     let noOfVideos = allElems[0].innerText;
// //     let noOfviews = allElems[1].innerText;
// //     return {
// //         noOfVideos,
// //         noOfviews
// //     }
// // }
// // async function getStats() {
// //     let list = await page.evaluate(consoleGetNameAndtime, "#video-title", "#container>#thumbnail span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
// //     return list;
// // }
// // async function getCVideosLength() {
// //     let length = await page.evaluate(consoleGetlength, "#container>#thumbnail span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
// //     return length;

// // }
// // async function scrollToBottom() {
// //     await page.evaluate(goToBottom);
// //     function goToBottom() {
// //         window.scrollBy(0, window.innerHeight);
// //         // console.log(window.innerHeight);
// //         // console.log("scrolled");
// //     }
// // }

// // function consoleGetNameAndtime(videoNameSelect, durationSelect) {
// //     let allNamesElem = document.querySelectorAll(videoNameSelect);
// //     let durationElem = document.querySelectorAll(durationSelect);
// //     let currentVideoList = []
// //     for (let i = 0; i < durationElem.length; i++) {
// //         let videoTitle = allNamesElem[i].innerText;
// //         let duration = durationElem[i].innerText;
// //         currentVideoList.push({ videoTitle, duration });
// //     }
// //     return currentVideoList;
// // }



// // function consoleGetlength(durationSelect) {
// //     let durationElem = document.querySelectorAll(durationSelect);
// //     return durationElem.length;
// // }













// a. Name of Playlist,view
// b. Total No of videos : 792
// c. actual No of videos :783
// d. Total length of playlist : 12 hours, 9 minutes, 12 seconds
// At 1.25x : 9 hours, 43 minutes, 21 seconds
// At 1.50x : 8 hours, 6 minutes, 8 seconds
// At 1.75x : 6 hours, 56 minutes, 41 seconds
// At 2.00x : 6 hours, 4 minutes, 36 seconds
// Average length of video : 29 minutes, 10 seconds

// e. console.table=>  of video number,name,time



// Current Task : name of playlist ,views,total videos, 

const puppeteer = require("puppeteer");
let page;
(async function fn() {
    let browser = await puppeteer.launch({
        headless: false, defaultViewport: null,
        args: ["--start-maximized"],
    })
    page = await browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq");
    await page.waitForSelector('h1[id="title"]');
    // first element 
    let element = await page.$('h1[id="title"]');
    let value = await page.evaluate(function cb(element) {
        return element.textContent;
    }
        , element);
    // all occurences F
    // 21
    console.log("Title", value)
    let someList = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[5]);
    console.log("videos", value)
    let videos = value.split(" ")[0].trim();
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[6]);
    console.log("views", value)
    // no of views -> playlist  
    // list first 100 videos console.table=>  of video number,name,// time

    // ->
    let loopcount = Math.floor(videos / 100);

    for (let i = 0; i < loopcount; i++) {
        // load start
        await page.click(".circle.style-scope.tp-yt-paper-spinner");
        // load finish
        await waitTillHTMLRendered(page);
        console.log("loaded the new videos");
    }
    // loader -> scroll 
    // video Name
    let videoNameElementList = await page.$$("a[id='video-title']");
    // console.log("videoNameElementList", videoNameElementList.length);
    // last video 
    let lastVideo = videoNameElementList[videoNameElementList.length - 1];
    // last video -> view
    await page.evaluate(function (elem) {
        elem.scrollIntoView();
    }, lastVideo);
    // time 
    //    await  page.waitFor(3000);
    let timeList = await page.$$("span[id='text']");
    console.log(timeList.length);

    let videosArr = [];
    for (let i = 0; i < videoNameElementList.length; i++) {
        let timeNTitleObj = await page.evaluate(getTimeAndTitle, timeList[i], videoNameElementList[i]);
        videosArr.push(timeNTitleObj);
    }
    console.table(videosArr);

})();
function getTimeAndTitle(element1, element2) {
    return {
        time: element1.textContent.trim(),
        title: element2.textContent.trim()
    }
}
// 
const waitTillHTMLRendered = async (page, timeout = 10000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;
    while (checkCounts++ <= maxChecks) {
        // html
        let html = await page.content();
        let currentHTMLSize = html.length;
        // body part
        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize);
        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }
        lastHTMLSize = currentHTMLSize;
        await page.waitFor(checkDurationMsecs);
    }
};