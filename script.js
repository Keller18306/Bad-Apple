const isRemix = /remix/i.test(window.location.search) || false

window.onload = init

const offset_time = 0

const fix_time = 1500

async function init() {
    const video = document.getElementById('main_video')
    const remix_music = document.getElementById('remix')

    function setRemix(isRemix) {
        if (isRemix) video.muted = true
        else remix_music.muted = true
    }

    setRemix(isRemix)

    const comment_element = document.getElementById('comment')

    const japan_element = document.getElementById('japan')
    const trascription_element = document.getElementById('trascription')
    const translitarate_element = document.getElementById('translitarate')
    const translate_element = document.getElementById('translate')

    const time = document.getElementById('time')

    function resetTime() {
        video.currentTime = offset_time + (fix_time/1e3)
        remix_music.currentTime = offset_time
    }

    try {
        resetTime()
        await Promise.all([
            video.play(),
            remix_music.play()
        ])
    } catch (e) {
        video.currentTime = 0
        remix_music.currentTime = 0
        await video.pause()
        await remix_music.pause()

        document.onclick = async () => {
            document.onclick = () => {
                console.log(Math.floor(video.currentTime * 1e3))
            }
            resetTime()
            await Promise.all([
                video.play(),
                remix_music.play()
            ])
        }
    }

    function setSubtitles(timestamp) {
        let found = false;
        for (const subtitle of subtitles) {
            if (!(timestamp >= subtitle.time[0] && timestamp <= subtitle.time[1])) continue;

            found = true

            japan_element.textContent = subtitle.japan
            trascription_element.textContent = subtitle.trascription
            translitarate_element.textContent = subtitle.translitarate
            translate_element.textContent = subtitle.translate

            break;
        }

        if (!found) {
            japan_element.textContent = ''
            trascription_element.textContent = ''
            translitarate_element.textContent = ''
            translate_element.textContent = ''
        }
    }

    function setComments(timestamp) {
        let found = false;
        for (const comment of comments) {
            if (!(timestamp >= comment.time[0] && timestamp <= comment.time[1])) continue;

            found = true

            comment_element.textContent = comment.text

            break;
        }

        if (!found) comment_element.textContent = ''
    }

    function setTime(timestamp) {
        time.textContent = timestamp
    }

    function update() {
        const timestamp = Math.floor(video.currentTime * 1e3)

        setSubtitles(timestamp)
        setComments(timestamp)
        setTime(timestamp)

        requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
}