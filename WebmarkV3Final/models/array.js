//Difficulties to access the external json file...I did this just to test
const bookmarkListCollection = [
  {
      "id": "32d50d2a-c529-45af-9230-2bbfe38985a6",
      "userid": "3ad52697-6d98-4d80-8273-084de55a86c0",
      "title": "Test1",
      "bookmarks": [
        {
          "id": "5cd8960c-306f-4eb5-b86f-7693f7bef85d",
          "title": "BookmarkTest1",
          "link": "https://gist.github.com/thiagodebastos/08ea551b97892d585f17"
        },
        {
          "id": "d3c64118-fa7c-4a3e-994e-9ca0acbc89d6",
          "title": "BookmarkTest2",
          "link": "https://www.kaggle.com"
        }
      ]
    },
    {
      "id": "b885b6ff-e2c4-4c24-aaf5-72f162f70a62",
      "userid": "3ad52697-6d98-4d80-8273-084de55a86c0",
      "title": "Test 2",
      "bookmarks": []
    }
    ];


//Just show the length of the array
document.write(bookmarkListCollection.length);
