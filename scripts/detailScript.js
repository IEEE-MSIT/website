const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const data = [];

const Team = {
  TA: [],
  MAIN: [],
  CS: [],
  RAS: [],
  PES: [],
  WIE: [],
  PROJECT_COMMITTEE: [],
  PUBLICITY_COMMITTEE: [],
  PROGRAM_COMMITTEE: [],
  EDITORIAL_COMMITTEE: [],
  CREATIVITY_COMMITTEE: [],
  DESIGN_COMMITTEE: [],
  SPONSORSHIP_AND_MEMBERSHIP_DEVELOPMENT_COMMITTEE: [],
};

const form = {
  rank: '',
  name: '',
  email: '',
  stream: '',
  part: '',
  position: '',
  linkedin: '',
  instagram: '',
  resume: '',
  image: '',
};

fs.createReadStream('./src/Pages/ExeCom/team.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for (let i = 0; i < results.length - 1; i++) {
      let res = results[i];
      const part = res['part'];
      const image = res['image'].substring(30);
      res['image'] = `https://drive.google.com/uc?export=view&${image}`;
      Team[part].push(res);
    }
    fs.writeFileSync('./src/Pages/ExeCom/ExeComDetails.json', JSON.stringify(Team), (err) => {
      if (err) {
        throw err;
      } else {
        console.log('Results saved successfully');
      }
    });
  });
