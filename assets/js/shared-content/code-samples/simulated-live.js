videojs.registerPlugin('simulated_live', function() {  var my_player = this,
  playlist_id = '1664503635149515112', // replace with your playlist id
  video_data,
  video_ranges = [],
  playlist_duration = 0,
  playlist_position,
  current_video_index,
  current_video_position,
  origin_time = new Date(2020-01-01),
  now_time,
  time_passed;

    /**
   * @Desc:  gets the duration of the whole playlist and array of video start times
   * @param {array} video_data array of video data for the playlist videos
   */
  function get_playlist_duration() {
    var i,
      i_max = video_data.length;
    
    for (i = 0; i < i_max; i++) {
      video_ranges[i] = playlist_duration;
      playlist_duration = playlist_duration + video_data[i].duration;
    }
  }

  /** 
   * @Desc:  gets time position in current playlist
   */
  function get_playlist_position() {
    now_time = new Date();
    time_passed = now_time - origin_time;
    playlist_position = time_passed % playlist_duration;
    return playlist_position;
  }
  
  /**
   * @Desc:  gets the index of the video that corresponds to the current position in the playlist
   */
  function get_current_video_index() {
    var i,
      i_max = video_ranges.length;
      for (i = 0; i < i_max; i++) {
        if (playlist_position > video_ranges[i] && playlist_position < video_ranges[i + 1]) {
          current_video_index = i;
          return;
        }
      }
  }
  
  /**
   * @Desc:  gets the start position for the video to match the start position in the playlist
   *
   */
  function get_current_video_position() {
    current_video_position = playlist_position - video_ranges[current_video_index];
  }


  // fetch the playlist
  my_player.catalog.getPlaylist(playlist_id, function(error, playlist){
    if (error) {
      console.log('There was an error retrieving the playlist: ', error);
    }
    
    // load the playlist into the player 
    // the -1 argument prevents the first video from being loaded into the player
    my_player.catalog.load(playlist, -1);

    // turn on auto-advance
    my_player.playlist.autoadvance(0);

    // turn on replay
    my_player.playlist.repeat(true);

    // get the video data from the playlist
    video_data = my_player.playlist();
    
    // get the duration of the playlist and the video ranges
    get_playlist_duration();
    
    // get the start position in the playlist
    get_playlist_position();
    
    // get the index of the video where the start position is
    get_current_video_index();
    
    // get start position in the video
    get_current_video_position();
    
    // set the start video as the current one
    my_player.playlist.currentItem(current_video_index);

    // wait for video to load
    my_player.on('loadedmetadata', function() {
      // seek to the start point
      my_player.currentTime(current_video_position / 1000);
      // start the video
      my_player.play();
    }

  })


});
