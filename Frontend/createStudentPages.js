
import { existsSync, mkdirSync, writeFileSync } from 'fs';

const pages = [
    'Dashboard', 
    'Profile', 
    'Logs', 
    'Settings', 
    'Notifications', 
    'Result', 
    'Fees', 
    'PaymentHistory', 
    'AccountStatement',
    'Payment',
    'Support',
    'Tickets',
    'ChangePassword',
    'Transcript',
    'Events',
    'ChildTranscript',
    'ChildFees',
    'ChildCourses',
    'ChildInformation',
    'CommunityForum',
    'PrivateForum',
    'Exeat',
  ];
  


const dir = 'src/pages/student';
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
  const filePath = `${dir}/${page}.jsx`;

  // Check if the file already exists
  if (!existsSync(filePath)) {
    const content = `import React from 'react';

const ${page} = () => {
  return (
    <div>
      <h1>${page} Which contains Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia voluptatibus ea cumque explicabo laborum quia maxime voluptatem ex optio beatae minus, deleniti provident consectetur architecto quaerat asperiores nisi quisquam!</h1>
    </div>
  );
};

export default ${page};
`;

    writeFileSync(filePath, content);
    console.log(`${page}.jsx created successfully!`);
  } else {
    console.log(`${page}.jsx already exists, skipping creation.`);
  }
});
