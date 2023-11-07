---
slug: "/linux-migration"
date: "2023-10-30"
title: "Why I migrated to Linux from Windows 11"
---

Welcome to my second blog entry, where I try my best to come up with something mildly original to write about. This article has no planning and my claims have no backing. I'm too lazy to actually do that. 

The story starts back in tenth grade when I started to take an online (free) course for web-development called [the Odin Project](https://theodinproject.com). In the introductory lessons, we were supposed to install linux, either as a dual boot or a VM. 

After that, I would start a journey of hopping on and off Linux (mostly Ubuntu, although my dumbass tried to install Arch at some point which was a miserable failure). I eventually abandoned Linux completely when I moved to the US, and my senior year in highschool relied heavily on me having a functioning laptop. 

During that summer I bought a laptop and the first thing I did was to install Ubuntu 20.04 in a dual boot config. The thinking was to keep all my development workflows (including CS homework) there while all the fun stuff like videgames (just Cyberpunk and BeamNG) and occasional software would stay on Windows. That only lasted for another 2 months before I switched to just Windows due to frustration with having to reboot all the time.

But I don't know, there was always this fire burning inside me to switch to Linux. I couldn't give you a logical reason, but it was just cool, and made me feel like I know more (although it probably taught me a thing or two about Linux servers). In sophomore year of college there was this Czech dude who dailied Arch Linux and was a very active developer. Additionally, another guy from my computer architecture class was an open-source developer, mainly doing desktop environment tweaks. These two once again ignited my desire to switch, and I did.

Okay so how was it? Let's say agonizing. Windows 11 had just updated and it wouldn't boot up, and this was TWO DAYS BEFORE I WENT ON A TRIP to Washington DC. I was like, wow! This is the perfect storm! If I was going to force myself to deal with Linux (because uninstalling that and reinstalling Windows is MUCH more difficult on a trip) that was the chance. And that's how the switch happened. It's been a whole month of heavy usage!

Everything was easy to set up initially, but then things started to get harder. I'd say there were two main problems: the Linux software library, and Wayland. 

See, because Linux doesn't have much market share, many devs don't even bother to provide native linux apps. Hell, even Microsoft completely ignores Linux, which leaves you to use Outlook, To Do, Onenote, and Office on the web. If you are using Chrome, you can keep using it, but it sucks. It constantly crashed for me and for some reason opening it would take forever. Here's all the software I had to switch to and get used to after the migration: OneNote --> Obsidian, Microsoft Office --> LibreOffice, Chrome --> Firefox, Photoshop (pirated :p) --> Inkscape + Gimp. The good news though, is that all Electron-based apps like Discord and Spotify are already available simply because porting those is super easy for the devs.

My main problem though, and I ADVISE ANYONE MAKING THIS SWITCH TO DO AS I DID, is to switch to X11 if you desktop environment was Wayland. Yes, Wayland is much faster and follows newer standards in general, but the fact that it's new means that there are MANY programs that aren't fully functional in Wayland. You got an Nvidia GPU? Well, say goodbye to it if you're using Wayland. Nvidia drivers don't support it (although AMD does). Wanna use OBS studio? NOPE! LibreOffice with reliable hardware acceleration? nah. 

X11 may seem sucky at first because its touchpad support is weird and you may experience some screen tearing on some GPUs, but trust me, you don't want a third of your apps not working like in Wayland. Just make the switch. 

Other than that (minor inconveniences if you're an advanced user), Linux has been pretty nice. My laptop's battery life as doubled, I don't get a shit ton of random updates that don't change (AND BREAK) anything, I can pretty much customize whatever I want, AND, I'm not paying anything for my operating system. I also learned about a whole lot of OSS software that are as good as their paid counterparts for daily tasks (Inkscape / Gimp vs Photoshop). Additionally, this whole experience can hopefully force me to be more active in open-source development. (theoretically at least...)

Alright, that's it. 