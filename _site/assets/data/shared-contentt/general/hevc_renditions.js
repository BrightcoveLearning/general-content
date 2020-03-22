var BCLS_hevc_renditions = ( function (window, document) {
  var  renditions = [
    {
      "id": "default/video550hevc",
      "version": 0,
      "name": "Default HEVC 550",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:58:08.602132077Z",
      "updated_at": "2020-02-20T17:58:08.602132077Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 825,
        "decoder_buffer_size": 1100,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 360,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 550,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 640
      }
    },
    {
      "id": "default/video300hevc",
      "version": 0,
      "name": "Default HEVC 300",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:57:49.622898302Z",
      "updated_at": "2020-02-20T17:57:49.622898302Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 450,
        "decoder_buffer_size": 600,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 270,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 300,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 480
      }
    },
    {
      "id": "default/video2850hevc",
      "version": 0,
      "name": "Default HEVC 2850",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T18:00:42.036123319Z",
      "updated_at": "2020-02-20T18:00:42.036123319Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 4275,
        "decoder_buffer_size": 5700,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 1080,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 2850,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 1920
      }
    },
    {
      "id": "default/video1600hevc",
      "version": 0,
      "name": "Default HEVC 1600",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T18:00:00.347383018Z",
      "updated_at": "2020-02-20T18:00:00.347383018Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 2400,
        "decoder_buffer_size": 3200,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 720,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 1600,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 1280
      }
    },
    {
      "id": "default/video1300hevc",
      "version": 0,
      "name": "Default HEVC 1300",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:58:51.222403657Z",
      "updated_at": "2020-02-20T17:58:51.222403657Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 1950,
        "decoder_buffer_size": 2600,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 576,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 1300,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 1024
      }
    },
    {
      "id": "default/video1000hevc",
      "version": 0,
      "name": "Default HEVC 1000",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:58:24.768036423Z",
      "updated_at": "2020-02-20T17:58:24.768036423Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 1500,
        "decoder_buffer_size": 2000,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 432,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 1000,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 768
      }
    },
    {
      "id": "default/video550hevc",
      "version": 0,
      "name": "Default HEVC 550",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:58:08.602132077Z",
      "updated_at": "2020-02-20T17:58:08.602132077Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 825,
        "decoder_buffer_size": 1100,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 360,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 550,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 640
      }
    },
    {
      "id": "default/video300hevc",
      "version": 0,
      "name": "Default HEVC 300",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:57:49.622898302Z",
      "updated_at": "2020-02-20T17:57:49.622898302Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 450,
        "decoder_buffer_size": 600,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 270,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 300,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 480
      }
    },
    {
      "id": "default/video2850hevc",
      "version": 0,
      "name": "Default HEVC 2850",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T18:00:42.036123319Z",
      "updated_at": "2020-02-20T18:00:42.036123319Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 4275,
        "decoder_buffer_size": 5700,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 1080,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 2850,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 1920
      }
    },
    {
      "id": "default/video1600hevc",
      "version": 0,
      "name": "Default HEVC 1600",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T18:00:00.347383018Z",
      "updated_at": "2020-02-20T18:00:00.347383018Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 2400,
        "decoder_buffer_size": 3200,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 720,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 1600,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 1280
      }
    },
    {
      "id": "default/video1300hevc",
      "version": 0,
      "name": "Default HEVC 1300",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:58:51.222403657Z",
      "updated_at": "2020-02-20T17:58:51.222403657Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 1950,
        "decoder_buffer_size": 2600,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 576,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 1300,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 1024
      }
    },
    {
      "id": "default/video1000hevc",
      "version": 0,
      "name": "Default HEVC 1000",
      "kind": "video",
      "account_id": "default",
      "created_at": "2020-02-20T17:58:24.768036423Z",
      "updated_at": "2020-02-20T17:58:24.768036423Z",
      "encoding_settings": {
        "aspect_mode": "preserve",
        "decoder_bitrate_cap": 1500,
        "decoder_buffer_size": 2000,
        "fixed_keyframe_interval": true,
        "fragment_duration": 2000,
        "height": 432,
        "keyframe_rate": 1,
        "segment_seconds": 2,
        "speed": 3,
        "video_bframes": 3,
        "video_bitrate": 1000,
        "video_codec": "hevc",
        "video_codec_profile": "main",
        "video_reference_frames": 6,
        "width": 768
      }
    }
  ];
})(window, document);
