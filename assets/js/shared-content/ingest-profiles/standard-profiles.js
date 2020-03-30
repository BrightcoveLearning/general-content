var BCLSprofiles = (function(window, document) {
  var mainSection = document.querySelector('.bcls-article'),
    proxyURL = "https://solutions.brightcove.com/bcls/bcls-proxy/bcls-proxy-v2.php",
    requestData = {},
    data = bclsProfiles_cached,
    headersArray,
    prop,
    navLabel = [],
    dd_profile_order = ['multi-platform-standard-static', 'multi-platform-standard-static-with-mp4', 'multi-platform-extended-static', 'multi-platform-extended-static-with-mp4'],
    videoRenditions = [{"id":"default/video900","version":5,"name":"Default Video900","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:55.150904095Z","updated_at":"2018-04-10T17:54:08.469543676Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1350,"decoder_buffer_size":1800,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":360,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":900,"video_codec":"h264"}},{"id":"default/video700","version":5,"name":"Default Video700","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:54.742007828Z","updated_at":"2018-04-10T17:54:07.905886133Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1050,"decoder_buffer_size":1400,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_profile":"baseline","height":360,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":700,"video_codec":"h264"}},{"id":"default/video6000","version":2,"name":"Default Video6000","kind":"video","account_id":"default","created_at":"2016-10-12T00:28:00.605692603Z","updated_at":"2018-06-12T16:54:10.44674261Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":9000,"decoder_buffer_size":12000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"high","height":2160,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":6000,"video_codec":"h264"}},{"id":"default/video450","version":5,"name":"Default Video450","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:54.333556376Z","updated_at":"2018-04-10T17:54:07.315641088Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":675,"decoder_buffer_size":900,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_profile":"baseline","height":270,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":450,"video_codec":"h264"}},{"id":"default/video4000","version":5,"name":"Default Video4000","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:53.907017826Z","updated_at":"2018-04-10T17:54:06.725040326Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":6000,"decoder_buffer_size":8000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"high","height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":4000,"video_codec":"h264","width":2048}},{"id":"default/video3800","version":4,"name":"Default Video3800","kind":"video","account_id":"default","created_at":"2016-10-13T02:52:42.941473455Z","updated_at":"2018-04-10T17:54:06.128550923Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":5700,"decoder_buffer_size":7600,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":3800,"video_codec":"h264"}},{"id":"default/video3500","version":5,"name":"Default Video3500","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:53.493670562Z","updated_at":"2018-04-10T17:54:05.394946466Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":5250,"decoder_buffer_size":7000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"high","height":1080,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":3500,"video_codec":"h264","width":2048}},{"id":"default/video2500","version":5,"name":"Default Video2500","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:53.062872982Z","updated_at":"2018-04-10T17:54:04.900867342Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":3750,"decoder_buffer_size":5000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":720,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":2500,"video_codec":"h264"}},{"id":"default/video2000","version":4,"name":"Default Video2000","kind":"video","account_id":"default","created_at":"2016-09-01T16:23:46.83319503Z","updated_at":"2018-04-10T17:54:04.369727738Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":3000,"decoder_buffer_size":4000,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":720,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":2000,"video_codec":"h264"}},{"id":"default/video1700","version":5,"name":"Default Video1700","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:52.657713254Z","updated_at":"2018-04-10T17:54:03.875572539Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":2550,"decoder_buffer_size":3400,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":540,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":1700,"video_codec":"h264"}},{"id":"default/video1200","version":5,"name":"Default Video1200","kind":"video","account_id":"default","created_at":"2016-06-06T23:39:52.256973266Z","updated_at":"2018-04-10T17:54:03.36884425Z","encoding_settings":{"aspect_mode":"preserve","decoder_bitrate_cap":1800,"decoder_buffer_size":2400,"fixed_keyframe_interval":true,"fragment_duration":2000,"h264_bframes":2,"h264_profile":"main","height":540,"keyframe_rate":1,"segment_seconds":2,"speed":3,"upscale":false,"video_bitrate":1200,"video_codec":"h264"}},{"id":"default/transmux_video","version":0,"name":"Transmux Video","kind":"transmuxVideo","account_id":"default","created_at":"2018-09-27T16:44:32.935814452Z","updated_at":"2018-09-27T16:44:32.935814452Z","encoding_settings":{"copy_video":true,"skip_audio":true}},{"id":"default/ssai-ad-video","version":0,"name":"ssai-ad-video","kind":"video","account_id":"default","created_at":"2018-03-22T18:28:40.232306241Z","updated_at":"2018-03-22T18:28:40.232306241Z","encoding_settings":{"fixed_keyframe_interval":true,"forced_keyframe_rate":1,"fragment_duration":2000,"keyframe_rate":1,"segment_seconds":2}}],
    progressiveRenditions = [{"id":"default/progressive900","version":0,"name":"Default Progressive900","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:32:53.284764088Z","updated_at":"2018-06-11T22:32:53.284764088Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":1350,"decoder_buffer_size":1800,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":360,"speed":3,"upscale":false,"video_bitrate":900,"video_codec":"h264"}},{"id":"default/progressive700","version":0,"name":"Default Progressive700","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:32:33.937106287Z","updated_at":"2018-06-11T22:32:33.937106287Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":1050,"decoder_buffer_size":1400,"force_aac_profile":"aac-lc","h264_profile":"baseline","height":360,"speed":3,"upscale":false,"video_bitrate":700,"video_codec":"h264"}},{"id":"default/progressive450","version":0,"name":"Default Progressive450","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:01:54.680631382Z","updated_at":"2018-02-27T22:01:54.680631382Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":64,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":675,"decoder_buffer_size":900,"force_aac_profile":"aac-lc","h264_profile":"baseline","height":270,"speed":3,"upscale":false,"video_bitrate":450,"video_codec":"h264"}},{"id":"default/progressive4000","version":0,"name":"Default Progressive4000","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:37:50.217242316Z","updated_at":"2018-06-11T22:37:50.217242316Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":6000,"decoder_buffer_size":8000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"high","height":1080,"speed":3,"upscale":false,"video_bitrate":4000,"video_codec":"h264","width":2048}},{"id":"default/progressive3500","version":0,"name":"Default Progressive3500","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:34:01.503067518Z","updated_at":"2018-06-11T22:34:01.503067518Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":5250,"decoder_buffer_size":7000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"high","height":1080,"speed":3,"upscale":false,"video_bitrate":3500,"video_codec":"h264","width":2048}},{"id":"default/progressive2500","version":0,"name":"Default Progressive2500","kind":"progressive","account_id":"default","created_at":"2018-06-11T22:33:45.851290928Z","updated_at":"2018-06-11T22:33:45.851290928Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":3750,"decoder_buffer_size":5000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":720,"speed":3,"upscale":false,"video_bitrate":2500,"video_codec":"h264"}},{"id":"default/progressive2000","version":0,"name":"Default Progressive2000","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:33:32.326046609Z","updated_at":"2018-02-27T22:33:32.326046609Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":3000,"decoder_buffer_size":4000,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":720,"speed":3,"upscale":false,"video_bitrate":2000,"video_codec":"h264"}},{"id":"default/progressive1700","version":0,"name":"Default Progressive1700","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:33:18.370171519Z","updated_at":"2018-02-27T22:33:18.370171519Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":2550,"decoder_buffer_size":3400,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":540,"speed":3,"upscale":false,"video_bitrate":1700,"video_codec":"h264"}},{"id":"default/progressive1200","version":0,"name":"Default Progressive1200","kind":"progressive","account_id":"default","created_at":"2018-02-27T22:33:06.287392362Z","updated_at":"2018-02-27T22:33:06.287392362Z","encoding_settings":{"aspect_mode":"preserve","audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","decoder_bitrate_cap":1800,"decoder_buffer_size":2400,"force_aac_profile":"aac-lc","h264_bframes":2,"h264_profile":"main","height":540,"speed":3,"upscale":false,"video_bitrate":1200,"video_codec":"h264"}},{"id":"default/generic_progressive","version":0,"name":"Default Generic Progressive","kind":"progressive","account_id":"default","created_at":"2018-12-11T17:31:12.846415819Z","updated_at":"2018-12-11T17:31:12.846415819Z","encoding_settings":{}}],
    audioRenditions = [{"id":"default/transmux_audio","version":0,"name":"Transmux Audio","kind":"transmuxAudio","account_id":"default","created_at":"2018-09-27T16:45:52.438894005Z","updated_at":"2018-09-27T16:45:52.438894005Z","encoding_settings":{"copy_audio":true,"skip_video":true}},{"id":"default/ssai-ad-audio","version":0,"name":"ssai-ad-audio","kind":"audio","account_id":"default","created_at":"2018-03-22T18:28:56.399785075Z","updated_at":"2018-03-22T18:28:56.399785075Z","encoding_settings":{"fixed_keyframe_interval":true,"forced_keyframe_rate":1,"fragment_duration":2000,"keyframe_rate":1,"segment_seconds":2}},{"id":"default/progressive_audio96","version":0,"name":"Default Progressive Audio96","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:55:37.964063625Z","updated_at":"2019-01-02T17:55:37.964063625Z","encoding_settings":{"audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/progressive_audio64","version":0,"name":"Default Progressive Audio64","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:56:01.222216054Z","updated_at":"2019-01-02T17:56:01.222216054Z","encoding_settings":{"audio_bitrate":64,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/progressive_audio192","version":0,"name":"Default Progressive Audio192","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:55:03.130899433Z","updated_at":"2019-01-02T17:55:03.130899433Z","encoding_settings":{"audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/progressive_audio128","version":0,"name":"Default Progressive Audio128","kind":"progressive","account_id":"default","created_at":"2019-01-02T17:55:19.793844184Z","updated_at":"2019-01-02T17:55:19.793844184Z","encoding_settings":{"audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","skip_video":true}},{"id":"default/audio96","version":5,"name":"Default Audio96","kind":"audio","account_id":"default","created_at":"2016-06-06T23:39:51.876947888Z","updated_at":"2017-12-05T19:52:36.652493367Z","encoding_settings":{"audio_bitrate":96,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}},{"id":"default/audio64","version":5,"name":"Default Audio64","kind":"audio","account_id":"default","created_at":"2016-06-06T23:39:51.49858741Z","updated_at":"2017-12-05T19:52:36.125618038Z","encoding_settings":{"audio_bitrate":64,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}},{"id":"default/audio192","version":2,"name":"audio192","kind":"audio","account_id":"default","created_at":"2016-10-12T00:52:48.575372031Z","updated_at":"2017-03-22T14:20:39.115514582Z","encoding_settings":{"audio_bitrate":192,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}},{"id":"default/audio128","version":5,"name":"Default Audio128","kind":"audio","account_id":"default","created_at":"2016-06-06T23:39:51.093305379Z","updated_at":"2017-12-05T19:52:35.587897334Z","encoding_settings":{"audio_bitrate":128,"audio_channels":2,"audio_codec":"aac","force_aac_profile":"aac-lc","forced_keyframe_rate":1,"fragment_duration":2000,"segment_seconds":2}}],
    profiles = [{"version":1,"name":"multi-platform-extended-static-hevc","display_name":"Multiplatform Extended HEVC","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1581706195164,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/video1600hevc","default/audio128","default/video550hevc","default/video1000hevc","default/video300hevc","default/video2850hevc","default/audio96","default/video1300hevc","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e572eced91e206108b82"},{"version":3,"name":"multi-platform-extended-static","display_name":"Multiplatform Extended","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/video700","default/video3500","default/video2000","default/video1700","default/video1200","default/audio96","default/video450","default/video900","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"f1b16093e2dc4f81810f1488"},{"version":1,"name":"multi-platform-extended-dynamic-hevc","display_name":"Multiplatform Extended HEVC (CAE)","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1581706195164,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/audio96","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":4200,"max_first_rendition_bitrate":250,"video_codec":"hevc","fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"sample_aspect_ratio":"1:1"},"hevc":true},"id":"5e470e014b23617ad079c486"},{"version":4,"name":"multi-platform-standard-dynamic","display_name":"Multiplatform Standard (CAE)","description":"Deliver a wide range of content types across a variety of platforms on mobile and desktop.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1510693542451,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/audio96"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":6,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1280,"height":720},"max_frame_rate":30,"max_bitrate":2400,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"39659dfe5b8a47ec9c5f31bb"},{"version":1,"name":"multi-platform-extended-static-mixed-codec","display_name":"Multiplatform Extended Static H.264 + HEVC","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1581706195164,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video1600hevc","default/audio128","default/video550hevc","default/video1000hevc","default/video300hevc","default/video700","default/video3500","default/video2000","default/video2500","default/video2850hevc","default/video450","default/video900","default/audio64","default/video3800","default/audio96","default/video1200","default/video1300hevc","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e57f305eb2517f27a543"},{"version":1,"name":"multi-platform-extended-dynamic-hevc-with-mp4","display_name":"Multiplatform Extended HEVC (CAE) with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1581706195164,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/progressive2000","default/audio96","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":4200,"max_first_rendition_bitrate":250,"video_codec":"hevc","fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"sample_aspect_ratio":"1:1"},"hevc":true},"id":"5e470e0c4c881c16fffdb88d"},{"version":2,"name":"multi-platform-standard-static","display_name":"Multiplatform Standard","description":"Deliver a wide range of content types across a variety of platforms on mobile and desktop.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1503002227773,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/video700","default/video2000","default/video1700","default/video1200","default/audio96","default/video450","default/video900"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"6198c17bbbdc42a4bb60a41f"},{"version":4,"name":"low-bandwidth-dynamic","display_name":"Bandwidth Limited (CAE)","description":"Provide optimal playback experience to end users in low bandwidth zones","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1510693542181,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/audio96"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":6,"min_resolution":{"width":192,"height":108},"max_resolution":{"width":1280,"height":720},"max_frame_rate":30,"max_bitrate":1800,"max_first_rendition_bitrate":120,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"4d11dc18c66c4720a0418e4c"},{"version":1,"name":"multi-platform-extended-dynamic-with-mp4","display_name":"Multiplatform Extended (CAE) with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/progressive2000","default/audio96","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":4200,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"8e763cc040da4923bb171322"},{"version":1,"name":"multi-platform-extended-static-mixed-codec-with-mp4","display_name":"Multiplatform Extended Static H.264 + HEVC with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1581706195164,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video1600hevc","default/audio128","default/video550hevc","default/video1000hevc","default/video300hevc","default/video700","default/progressive2000","default/video3500","default/video2000","default/video2500","default/video2850hevc","default/video450","default/video900","default/audio64","default/video3800","default/audio96","default/video1200","default/video1300hevc","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e59b135b6662f386559d"},{"version":1,"name":"multi-platform-extended-static-hevc-with-mp4","display_name":"Multiplatform Extended HEVC with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1581706195164,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/video1600hevc","default/audio128","default/video550hevc","default/video1000hevc","default/video300hevc","default/progressive2000","default/video2850hevc","default/audio96","default/video1300hevc","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e57e708a441e00a7ba1a"},{"version":4,"name":"multi-platform-extended-dynamic","display_name":"Multiplatform Extended (CAE)","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1510693542326,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/audio96","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":4200,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"86895c0c460a4c238676e0ad"},{"version":1,"name":"multi-platform-extended-static-with-mp4","display_name":"Multiplatform Extended with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio64","default/audio128","default/video700","default/progressive2000","default/video3500","default/video2000","default/video1700","default/video1200","default/audio96","default/video450","default/video900","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"f984445692374bd99e6270d8"}], 
    bclsProfiles_cached = profiles;

  requestData.url = 'https://ingestion.api.brightcove.com/v1/accounts/3921507403001/profiles';
  requestData.requestType = 'GET';

  /**
   * determines whether specified item is in an array
   *
   * @param {array} array to check
   * @param {string} item to check for
   * @return {boolean} true if item is in the array, else false
   */
  function isItemInArray(arr, item) {
    var i,
      iMax = arr.length;
    for (i = 0; i < iMax; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  }

  /**
   * find index of an object in array of objects
   * based on some property value
   *
   * @param {array} targetArray array to search
   * @param {string} objProperty object property to search
   * @param {string} value of the property to search for
   * @return {integer} index of first instance if found, otherwise returns -1
  */
  function findObjectInArray(targetArray, objProperty, value) {
      var i, totalItems = targetArray.length, objFound = false;
      for (i = 0; i < totalItems; i++) {
          if (targetArray[i][objProperty] === value) {
              objFound = true;
              return i;
          }
      }
      if (objFound === false) {
          return -1;
      }
  }

  /*
   * determines whether this profile is static
   * @param {Object} item the profile item
   * @return {Boolean} whether the item is static
   */
  function isStatic(item) {
    if (item.name.indexOf('static') >= 0) {
      return true;
    }
    return false;
  }

  /*
   *
   */
  function isAudio(item) {
    if (item.indexOf('audio') >= 0) {
      return true;
    }
    return false;
  }
  /**
   * remove spaces from passed string
   * @param  {string} str - the string to remove spaces from
   * @return {str}   - string with spaces removed
   */
  function removeSpaces(str) {
    if (isDefined(str)) {
      return str.replace(/\s/g, "");
    }
    return "";
  }
  /**
   * tests for all the ways a variable might be undefined or not have a value
   * @param {*} x the variable to test
   * @return {Boolean} true if variable is defined and has a value
   */
  function isDefined(x) {
    if (x === '' || x === null || x === undefined) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * dedupe a simple array of strings or numbers
   * @param {array} arr the array to be deduped
   * @return {array} out the deduped array
   */
  function dedupe(arr) {
    var i,
      len = arr.length,
      out = [],
      obj = {};

    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
  /**
   * create an element
   * @param  {string} type - the element type
   * @param  {object} attributes - attributes to add to the element
   * @return {object} the HTML element
   */
  function createEl(type, attributes) {
    var el;
    if (isDefined(type)) {
      el = document.createElement(type);
      if (isDefined(attributes)) {
        var attr;
        for (attr in attributes) {
          el.setAttribute(attr, attributes[attr]);
        }
      }
      return el;
    }
  }

  // // create navigation for page sections
  // function createInPageNavMenu() {
  //   var sideNavList = document.querySelector('.bc-ipnav-block ul'),
  //     lastLI = sideNavList.lastChild,
  //     i,
  //     max = navLabel.length,
  //     aEl,
  //     liEl,
  //     txt;
  //   for (i = 0; i < max; i++) {
  //     liEl = document.createElement('li');
  //     aEl = document.createElement('a');
  //     aEl.setAttribute('href', '#' + navLabel[i].link);
  //     txt = document.createTextNode(navLabel[i].text);
  //     aEl.appendChild(txt);
  //     liEl.appendChild(aEl);
  //     sideNavList.insertBefore(liEl, lastLI);
  //   }
  // }

  // function createInPageNav() {
  //   var navObj = {},
  //     h2s = document.querySelectorAll('section.bcls-section h2'),
  //     i, index,
  //     iMax = h2s.length;
  //   // set initial visibilities
  //   for (i = 0; i < iMax; i++) {
  //     index = i;
  //     if (index > 0) {
  //       $this = h2s[i];
  //       navObj = {};
  //       navObj.link = $this.getAttribute("id");
  //       navObj.text = $this.innerHTML;
  //       navLabel.push(navObj);
  //     }
  //   }
  //   // only create the nav widget if there is more than one item
  //   if (navLabel.length > 1) {
  //     // create in-page nav menu
  //     createInPageNavMenu();
  //   }
  // }

  function buildComparisonTable() {
    var profiles = data.BCLSprofilesStatic,
      comparisonTableHead = document.getElementById('comparisonTableHead'),
      comparisonTableBody = document.getElementById('comparisonTableBody'),
      noImg = '//learning-services-media.brightcove.com/doc-assets/general/images/x16.png',
      yesImg = '//learning-services-media.brightcove.com/doc-assets/general/images/check16.png',
      tr,
      th,
      td,
      img,
      a,
      i,
      iMax,
      j,
      jMax,
      bodyFrag = document.createDocumentFragment(),
      headFrag = document.createDocumentFragment();
    tr = document.createElement('tr');
    th = document.createElement('th');
    th.textContent = 'Renditions';
    tr.appendChild(th);
    // build table headers
    iMax = profiles.length;
    for (i = 0; i < iMax; i++) {
      th = document.createElement('th');
      th.setAttribute('class', 'notranslate');
      a = document.createElement('a');
      a.setAttribute('href', '#' + profiles[i].name);
      a.textContent = profiles[i].name;
      tr.appendChild(th);
      th.appendChild(a);
    }
    headFrag.appendChild(tr);

    // build table body
    // audio renditions
    console.log('audioRenditions', audioRenditions);
    iMax = audioRenditions.length;
    for (i = 0; i < iMax; i++) {
      tr = document.createElement('tr');
      td = document.createElement('td');
      td.setAttribute('class', 'notranslate');
      td.textContent = audioRenditions[i].id;
      tr.appendChild(td);
      jMax = profiles.length;
      for (j = 0; j < jMax; j++) {
        td = document.createElement('td');
        td.setAttribute('style', 'text-align:center');
        img = document.createElement('img');
        if (isItemInArray(profiles[j].dynamic_origin.renditions, audioRenditions[i].id)) {
          img.setAttribute('src', yesImg);
          img.setAttribute('alt', 'yes');
          td.appendChild(img);
          tr.appendChild(td);
        } else {
          img.setAttribute('src', noImg);
          img.setAttribute('alt', 'no');
          td.appendChild(img);
          tr.appendChild(td);
        }
      }
      bodyFrag.appendChild(tr);
    }

    // dynamic video Renditions
    iMax = videoRenditions.length;
    for (i = 0; i < iMax; i++) {
      tr = document.createElement('tr');
      td = document.createElement('td');
      td.setAttribute('class', 'notranslate');
      td.textContent = videoRenditions[i].id;
      tr.appendChild(td);
      jMax = profiles.length;
      for (j = 0; j < jMax; j++) {
        td = document.createElement('td');
        td.setAttribute('style', 'text-align:center');
        img = document.createElement('img');
        if (isItemInArray(profiles[j].dynamic_origin.renditions, videoRenditions[i].id)) {
          img.setAttribute('src', yesImg);
          img.setAttribute('alt', 'yes');
          td.appendChild(img);
          tr.appendChild(td);
        } else {
          img.setAttribute('src', noImg);
          img.setAttribute('alt', 'no');
          td.appendChild(img);
          tr.appendChild(td);
        }
      }
      bodyFrag.appendChild(tr);
    }

    // progressive video Renditions
    iMax = progressiveRenditions.length;
    for (i = 0; i < iMax; i++) {
      tr = document.createElement('tr');
      td = document.createElement('td');
      td.setAttribute('class', 'notranslate');
      td.textContent = progressiveRenditions[i].id;
      tr.appendChild(td);
      jMax = profiles.length;
      for (j = 0; j < jMax; j++) {
        td = document.createElement('td');
        td.setAttribute('style', 'text-align:center');
        img = document.createElement('img');
        if (isItemInArray(profiles[j].dynamic_origin.renditions, progressiveRenditions[i].id)) {
          img.setAttribute('src', yesImg);
          img.setAttribute('alt', 'yes');
          td.appendChild(img);
          tr.appendChild(td);
        } else {
          img.setAttribute('src', noImg);
          img.setAttribute('alt', 'no');
          td.appendChild(img);
          tr.appendChild(td);
        }
      }
      bodyFrag.appendChild(tr);
    }

    // add to doc
    comparisonTableHead.appendChild(headFrag);
    comparisonTableBody.appendChild(bodyFrag);
  }

  function buildSummaryTable() {
    var newSectionNode = document.createElement("section"),
      sectionHeadingNode = document.createElement("h2"),
      sectionSubHeadingNode,
      sectionIntroNode = document.createElement("p"),
      profileTableNode = document.createElement("table"),
      profileTableNodeCAE = document.createElement("table"),
      profiletheadNode = document.createElement("thead"),
      profiletheadNodeCAE = document.createElement("thead"),
      profiletbodyNode = document.createElement("tbody"),
      profiletbodyNodeCAE = document.createElement("tbody"),
      sectionHeadingElem,
      sectionIntroElem,
      profileTableElem,
      profiletheadElem,
      profiletbodyElem,
      fragment1 = document.createDocumentFragment(),
      fragment2 = document.createDocumentFragment(),
      i,
      iMax,
      j,
      jMax,
      k,
      kMax,
      item,
      str = "",
      tr,
      th,
      td,
      a,
      content;
    // static profiles
    iMax = data.BCLSprofilesStatic.length;
    // massage data
    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesStatic[i];
      item.videoRenditions = 0;
      item.audioRenditions = 0;
      item.imageRenditions = item.dynamic_origin.images.length;

      jMax = item.dynamic_origin.renditions.length;
      item.numRenditions = jMax;

      for (j = 0; j < jMax; j++) {
        // count up renditions of each kind
        // console.log('item.dynamic_origin.renditions[j]', item.dynamic_origin.renditions[j]);
        if (!isAudio(item.dynamic_origin.renditions[j])) {
          item.videoRenditions++;
        } else {
          item.audioRenditions++;
        }
      }
    }
    sectionSubHeadingNode = document.createElement('h3');
    content = document.createTextNode('Dynamic Delivery Profiles');
    sectionSubHeadingNode.appendChild(content);
    newSectionNode.setAttribute("id", "Summary_Table");
    newSectionNode.setAttribute("class", "bcls-section");
    sectionHeadingNode.setAttribute("id", "summaryTableHeading");
    sectionIntroNode.setAttribute("id", "summarySectionIntro");
    profileTableNode.setAttribute("id", "profileSummaryTable");
    profileTableNode.setAttribute("class", "bcls-table");
    profiletheadNode.setAttribute("id", "profileSummaryTableThead");
    profiletheadNode.setAttribute("class", "bcls-table__head");
    profiletbodyNode.setAttribute("id", "profileSummaryTableTbody");
    profiletbodyNode.setAttribute("class", "bcls-table__body");
    newSectionNode.appendChild(sectionHeadingNode);
    newSectionNode.appendChild(sectionIntroNode);
    newSectionNode.appendChild(sectionSubHeadingNode);
    newSectionNode.appendChild(profileTableNode);
    profileTableNode.appendChild(profiletheadNode);
    profileTableNode.appendChild(profiletbodyNode);

    iMax = data.BCLSprofilesStatic.length;
    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesStatic[i];
      tr = document.createElement('tr');
      profiletbodyNode.appendChild(tr);
      td = document.createElement('td');
      a = document.createElement('a');
      a.setAttribute('href', '#' + removeSpaces(item.name));
      content = document.createTextNode(item.name);
      a.appendChild(content);
      td.appendChild(a);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.videoRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.audioRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.imageRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      content = document.createTextNode(item.description);
      td.appendChild(content);
      tr.appendChild(td);
    }
    content = document.createTextNode('Standard Profiles List');
    sectionHeadingNode.appendChild(content);
    content = document.createTextNode('Click on a profile name to see details of the renditions it includes. Note that the actual renditions created will depend on the quality of the source video.');
    sectionIntroNode.appendChild(content);
    tr = document.createElement('tr');
    profiletheadNode.appendChild(tr);
    th = document.createElement('th');
    content = document.createTextNode('Profile Name');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Video');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Audio');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Image');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Description');
    th.appendChild(content);
    tr.appendChild(th);

    fragment1.appendChild(newSectionNode);
    mainSection.appendChild(fragment1);


    // now the CAE profiles
    iMax = data.BCLSprofilesDynamic.length;

    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesDynamic[i];
      item.videoRenditions = item.dynamic_origin.dynamic_profile_options.min_renditions + ' - ' + item.dynamic_origin.dynamic_profile_options.max_renditions;
      item.audioRenditions = item.dynamic_origin.renditions.length;
      item.imageRenditions = item.dynamic_origin.images.length;

    }
    sectionSubHeadingNode = document.createElement('h3');
    content = document.createTextNode('Context Aware Encoding Profiles');
    sectionSubHeadingNode.appendChild(content);
    profileTableNodeCAE.setAttribute("id", "profileSummaryTableCAE");
    profileTableNodeCAE.setAttribute("class", "bcls-table");
    profiletheadNodeCAE.setAttribute("id", "profileSummaryTableTheadCAE");
    profiletheadNodeCAE.setAttribute("class", "bcls-table__head");
    profiletbodyNodeCAE.setAttribute("id", "profileSummaryTableTbodyCAE");
    profiletbodyNodeCAE.setAttribute("class", "bcls-table__body");
    newSectionNode.appendChild(sectionSubHeadingNode);
    newSectionNode.appendChild(profileTableNodeCAE);
    profileTableNodeCAE.appendChild(profiletheadNodeCAE);
    profileTableNodeCAE.appendChild(profiletbodyNodeCAE);
    iMax = data.BCLSprofilesDynamic.length;
    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesDynamic[i];
      tr = document.createElement('tr');
      profiletbodyNodeCAE.appendChild(tr);
      td = document.createElement('td');
      a = document.createElement('a');
      a.setAttribute('href', '#' + removeSpaces(item.name));
      content = document.createTextNode(item.name);
      a.appendChild(content);
      td.appendChild(a);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.videoRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.audioRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.imageRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      content = document.createTextNode(item.description);
      td.appendChild(content);
      tr.appendChild(td);
    }
    fragment2.appendChild(newSectionNode);
    mainSection.appendChild(fragment2);

    tr = document.createElement('tr');
    profiletheadNodeCAE.appendChild(tr);
    th = document.createElement('th');
    content = document.createTextNode('Profile Name');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Video');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Audio');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Image');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Description');
    th.appendChild(content);
    tr.appendChild(th);

  }

  function buildDetailTables() {
    // build the details of each rendition as a section
    var section,
      fragment = document.createDocumentFragment(),
      sectionHeading,
      sectionSubHeading,
      sectionJsonHeading,
      sectionJsonP,
      sectionTableHeading,
      renditionList,
      renditionListNote,
      renditionListNoteA,
      renditionTable,
      renditionthead,
      renditiontbody,
      profileSettingsTable,
      profileSettingsTableHeading,
      profileSettingsthead,
      profileSettingstbody,
      tr,
      th,
      td,
      ul,
      li,
      link,
      profilePre,
      profileCode,
      i, j, k, jMax, iMax, kMax,
      headings,
      profile,
      rendition,
      renditionProperty,
      text,
      str,
      l,
      lMax,
      re = /_/g;
    // static profiles
    iMax = data.BCLSprofilesStatic.length;
    for (i = 0; i < iMax; i++) {
      var renditionsArray = [],
        renditionListHead,
        renditionListItem;
      headersArray = [];
      profile = data.BCLSprofilesStatic[i];
      renditionsArray = profile.dynamic_origin.renditions;
      renditionsArray.sort();
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      // profile.name = profile.name + ' Copy';
      profile.account_id = null;
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = document.createElement("p");
      renditionListHead = document.createElement('h5');
      renditionList = createEl('ul', {
        'style': 'font-weight:600;'
      });
      renditionListHead.textContent = 'Renditions included:';
      kMax = renditionsArray.length;
      for (k = 0; k < kMax; k++) {
        renditionListItem = document.createElement('li');
        renditionListItem.textContent = renditionsArray[k];
        renditionList.appendChild(renditionListItem);
      }
      renditionListNote = createEl('p');
      renditionListNoteA = createEl('a', {
        href: '#Renditions'
      });
      text = document.createTextNode('Rendition Details for Dynamic Delivery');
      renditionListNoteA.appendChild(text);
      text = document.createTextNode('For details on the renditions created see ');
      renditionListNote.appendChild(text);
      renditionListNote.appendChild(renditionListNoteA);
      sectionJsonHeading = createEl("h4", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h4");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(renditionListHead);
      section.appendChild(renditionList);
      section.appendChild(renditionListNote);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);

      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of image rendition properties");
      sectionTableHeading.appendChild(text);
      // now do the renditions
      // headersArray.push('renditions');
      jMax = profile.dynamic_origin.images.length;
      // get all properties and build the table headers
      for (j = 0; j < jMax; j++) {
        rendition = profile.dynamic_origin.images[j];
        for (prop in rendition) {
          headersArray.push(prop);
        }
      }
      // dedupe the headers
      headersArray = dedupe(headersArray);
      // create the table headers
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      // now add the body row for each rendition
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.dynamic_origin.images[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
    }
    mainSection.appendChild(fragment);
    // dynamic profiles
    iMax = data.BCLSprofilesDynamic.length;
    for (i = 0; i < iMax; i++) {
      var renditionsArray = [],
        renditionListHead,
        renditionListItem;
      profile = data.BCLSprofilesDynamic[i];
      renditionsArray = profile.dynamic_origin.renditions;
      renditionsArray.sort();
      headersArray = [];
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      profile.account_id = null;
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = createEl("p");
      renditionListHead = document.createElement('h5');
      renditionList = createEl('ul', {
        'style': 'font-weight:600;'
      });
      renditionListHead.textContent = 'Audio and MP4 renditions included:';
      kMax = renditionsArray.length;
      for (k = 0; k < kMax; k++) {
        renditionListItem = document.createElement('li');
        renditionListItem.textContent = renditionsArray[k];
        renditionList.appendChild(renditionListItem);
      }
      renditionListNote = createEl('p');
      renditionListNoteA = createEl('a', {
        href: 'https://support.brightcove.com/overview-dynamic-ingest-api-dynamic-delivery#ingestProfile'
      });
      text = document.createTextNode('Audio Rendition Details for Context Aware Encoding');
      renditionListNoteA.appendChild(text);
      text = document.createTextNode('For details on the audio renditions created see ');
      renditionListNote.appendChild(text);
      renditionListNote.appendChild(renditionListNoteA);
      sectionJsonHeading = createEl("h4", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h4");
      profileSettingsTableHeading = createEl("h4");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(renditionListHead);
      section.appendChild(renditionList);
      section.appendChild(renditionListNote);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      profileSettingsTable = createEl("table", {
        class: "bcls-table"
      });
      profileSettingsthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      profileSettingstbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);
      section.appendChild(profileSettingsTableHeading);
      section.appendChild(profileSettingsTable);
      profileSettingsTable.appendChild(profileSettingsthead);
      profileSettingsTable.appendChild(profileSettingstbody);
      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of image rendition properties");
      sectionTableHeading.appendChild(text);
      text = document.createTextNode('Dynamic Profile Settings');
      profileSettingsTableHeading.appendChild(text);
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        rendition = profile.dynamic_origin.images[j];
        for (prop in rendition) {
          headersArray.push(prop);
        }
      }
      headersArray = dedupe(headersArray);
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.dynamic_origin.images[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
      tr = createEl('tr');
      th = createEl('th');
      text = document.createTextNode('Property');
      th.appendChild(text);
      tr.appendChild(th);
      th = createEl('th');
      text = document.createTextNode('Value');
      th.appendChild(text);
      tr.appendChild(th);
      profileSettingsthead.appendChild(tr);
      for (prop in profile.dynamic_origin.dynamic_profile_options) {
        tr = createEl('tr');
        profileSettingstbody.appendChild(tr);
        td = createEl('td');
        text = document.createTextNode(prop);
        td.appendChild(text);
        tr.appendChild(td);
        td = createEl('td');
        if (prop === 'max_resolution') {
          var ul = createEl('ul'),
            li;
          li = createEl('li');
          text = document.createTextNode('width: ' + profile.dynamic_origin.dynamic_profile_options.max_resolution.width);
          li.appendChild(text);
          ul.appendChild(li);
          li = createEl('li');
          text = document.createTextNode('height: ' + profile.dynamic_origin.dynamic_profile_options.max_resolution.height);
          li.appendChild(text);
          ul.appendChild(li);
          td.appendChild(ul);
          tr.appendChild(td);
        } else if (prop === 'min_resolution') {
          var ul = createEl('ul'),
            li;
          li = createEl('li');
          text = document.createTextNode('width: ' + profile.dynamic_origin.dynamic_profile_options.min_resolution.width);
          li.appendChild(text);
          ul.appendChild(li);
          li = createEl('li');
          text = document.createTextNode('height: ' + profile.dynamic_origin.dynamic_profile_options.min_resolution.height);
          li.appendChild(text);
          ul.appendChild(li);
          td.appendChild(ul);
          tr.appendChild(td);
        } else {
          text = document.createTextNode(profile.dynamic_origin.dynamic_profile_options[prop]);
          td.appendChild(text);
          tr.appendChild(td);
        }
      }
    }
    fragment.appendChild(section);
    mainSection.appendChild(fragment);
    // get reference to codeBlocks
    // call function from toc-shared-content to add profiles to TOC
    BCLS_toc.create_inpage_nav();
  }

  function setCodeBlocks() {
    var i,
      iMax;
    codeBlocks = document.getElementsByClassName('bcls-code');

    function selectCode() {
      this.select();
    }

    iMax = codeBlocks.length;
    for (i = 0; i < iMax; i++) {
      codeBlocks[i].addEventListener('click', selectCode);
    }
  }

  function getProfileData() {
    var httpRequest = new XMLHttpRequest(),
      i,
      iMax,
      tmpArr,
      tmpArr2 = [],
      item,
      idx,
      getResponse = function() {
        try {
          if (httpRequest.readyState === 4) {
            if (httpRequest.status >= 200 && httpRequest.status < 300) {
              // try {
              tmpArr = JSON.parse(httpRequest.responseText);
              iMax = tmpArr.length;
              data.BCLSprofilesStatic = [];
              data.BCLSprofilesDynamic = [];
              for (i = 0; i < iMax; i += 1) {
                item = tmpArr[i];
                if (isDefined(item.dynamic_origin)) {
                  if (isStatic(item)) {
                    data.BCLSprofilesStatic.push(item);
                  } else {
                    data.BCLSprofilesDynamic.push(item);
                  }
                }
              }
              // reorder the static profile lis
              iMax = dd_profile_order.length;
              for (i = 0; i < iMax; i++) {
                idx = findObjectInArray(data.BCLSprofilesStatic, 'name', dd_profile_order[i]);
                if (idx > -1) {
                  tmpArr2.push(data.BCLSprofilesStatic[idx]);
                }
              }
              data.BCLSprofilesStatic = tmpArr2;
              buildComparisonTable();
              buildSummaryTable();
              buildDetailTables();


            } else {
              console.log("There was a problem with the request. Request returned: ", httpRequest.status);
              // just use cached data and build the tables
              data = bclsProfiles_cached;
              buildComparisonTable();
              buildSummaryTable();
              buildDetailTables();

            }
          }
        } catch (e) {
          console.log('Caught Exception: ', e);
        }
      };
    // set response handler
    httpRequest.onreadystatechange = getResponse;
    // open the request
    httpRequest.open("POST", proxyURL);
    // set headers
    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // open and send request
    httpRequest.send(JSON.stringify(requestData));
  }
  getProfileData();
})(window, document);
