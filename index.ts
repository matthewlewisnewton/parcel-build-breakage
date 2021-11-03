import * as tf from '@tensorflow/tfjs-core';
import * as gpu from '@tensorflow/tfjs-backend-webgl';
import * as cpu from '@tensorflow/tfjs-backend-cpu';
import * as qna from '@tensorflow-models/qna';
let break_treeshaking_hack: any = tf;
break_treeshaking_hack = cpu;
break_treeshaking_hack = gpu;

export async function askAboutMinification() {
    const model = await qna.load();
    console.log('model loaded');
    const context = document.body.innerText;
    const answers = await model.findAnswers("What helps make minification more effective?",context);
    console.log('model finished running');
    for (const a of answers) {
       console.log(a);
    }
}
askAboutMinification();