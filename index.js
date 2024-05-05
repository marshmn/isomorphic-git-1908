import git from 'isomorphic-git';
import * as fs from 'fs';

await git.add({fs, dir: '.', filepath: '.' });

