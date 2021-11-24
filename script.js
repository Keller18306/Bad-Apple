const isRemix = /remix/i.test(window.location.search) || false

window.onload = init

const offset_time = 0

const speed = 1

const fix_time = isRemix ? 1500 : 0

async function init() {
    const video = document.getElementById('video')
    const audio = document.getElementById('audio')

    video.onpause = () => {
        if(audio.paused) return;
        audio.pause()
    }

    video.onplay = () => {
        if(!audio.paused || audio.currentTime == 0) return;
        audio.play()
    }

    async function setRemix(isRemix) {
        /*if (isRemix) video.muted = true
        else remix_music.muted = true*/

        const promise = new Promise(res => {
            audio.oncanplay = res
        })

        audio.src = (isRemix ? 'remix' : 'original') + '.mp3'

        return promise
    }

    await setRemix(isRemix)

    video.playbackRate = speed
    audio.playbackRate = speed

    const comment_element = document.getElementById('comment')

    const japan_element = document.getElementById('japan')
    const trascription_element = document.getElementById('trascription')
    const translitarate_element = document.getElementById('translitarate')
    const translate_element = document.getElementById('translate')

    const time = document.getElementById('time')

    const person_element = document.getElementById('person')

    const need_press = document.getElementById('press')

    function resetTime() {
        setPosition(offset_time, false)
    }

    async function setPosition(time = 0, autoplay = true) {
        video.currentTime = time + (fix_time/1e3)
        audio.currentTime = time

        if(autoplay) await Promise.all([
            video.play(),
            audio.play()
        ])
    }

    window.setPosition = setPosition

    try {
        resetTime()
        await Promise.all([
            video.play(),
            audio.play()
        ])

        document.onclick = () => {
            console.log(Math.floor(video.currentTime * 1e3))
        }
    } catch (e) {
        need_press.hidden = false

        video.currentTime = 0
        audio.currentTime = 0

        video.pause()
        audio.pause()

        document.onclick = async () => {
            need_press.hidden = true

            document.onclick = () => {
                console.log(Math.floor(video.currentTime * 1e3))
            }

            resetTime()

            await Promise.all([
                video.play(),
                audio.play()
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

    function setPersons(timestamp) {
        const fpersons = [];

        for (const person of persons) {
            if (!(timestamp >= person.time[0] && timestamp <= person.time[1])) continue;

            fpersons.push(person.name)
            //break;
        }

        person_element.textContent = fpersons.join(', ')
    }

    function update() {
        const timestamp = Math.floor(video.currentTime * 1e3)

        setSubtitles(timestamp)
        setComments(timestamp)
        setTime(timestamp)
        setPersons(timestamp)

        requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
}