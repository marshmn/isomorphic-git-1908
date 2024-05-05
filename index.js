import git from 'isomorphic-git';
import * as fs from 'fs';

console.log("Hello, World!");

await git.add({fs, dir: '.', filepath: '.' });

