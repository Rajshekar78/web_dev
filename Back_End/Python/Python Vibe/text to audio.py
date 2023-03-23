import pyttsx3

text_speech = pyttsx3.init()

text = 'Hi Prajwal, How are you'
text_speech.say(text)
text_speech.runAndWait()
