/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"> </script>
// <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis"></script>

import {getModel, loadData} from './model.js';

window.data;
window.model;

async function initData() {
  window.data = await loadData();
}

function initModel() {
  window.model = getModel();
}

function setupListeners() {
  document.querySelector('#show-visor').addEventListener('click', () => {
    const visorInstance = tfvis.visor();
    if (!visorInstance.isOpen()) {
      visorInstance.toggle();
    }
  });

  document.querySelector('#make-first-surface')
      .addEventListener('click', () => {
        tfvis.visor().surface({name: 'My First Surface', tab: 'Input Data'});
      });

  document.querySelector('#load-data').addEventListener('click', async (e) => {
  document.querySelector('#load-data').innerHTML = 'Loading...';
    await initData();
    document.querySelector('#show-examples').disabled = false;
    document.querySelector('#start-training-1').disabled = false;
    document.querySelector('#start-training-2').disabled = false;
    document.querySelector('#start-training-3').disabled = false;
    e.target.disabled = true;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initModel();
  setupListeners();
});
