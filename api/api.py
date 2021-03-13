import time
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/matches')
def get_current_matches():
    matches = [
        {'gameId': 2, 'gameType': 'MATCHED_GAME'},
        {'gameId': 3, 'gameType': 'MATCHED_GAME'},
        {'gameId': 4, 'gameType': 'CUSTOM_GAME'}        
    ]
    return jsonify(results = matches)
