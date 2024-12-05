# Example: Realtime Chat Application on the EV Charging Stations Data through NERL API

## Overview

### Finding a Charging Spot Shouldn’t Be a Treasure Hunt

Imagine this: You’re cruising down the highway, enjoying the smooth hum of your electric vehicle, when the dreaded <i> “Low Battery” </i> light flickers on. Panic sets in. You’re in an unfamiliar area, and the next charging station could be miles away—or worse, nonexistent. Sound familiar? Finding a nearby EV charging station can feel like hunting for a needle in a haystack. With the rise of electric vehicles (EVs), this problem has become a daily dilemma for many drivers. But what if we could turn that experience on its head?

### Enter PromptQL: A Real-Time, User-Friendly Solution

What if you could simply ask where the nearest charging stations are, and—just like magic—a real-time answer appears, pinpointing the closest options with precision? That's where PromptQL and the NREL API come in. Think of PromptQL as the digital assistant for EV drivers, guiding you to the nearest charging station as effortlessly as sending a text.

This isn’t just another app. This is a <b> real-time chat application </b> that directly connects to the NREL API (National Renewable Energy Laboratory). The <b> NREL API </b> is a treasure trove of real-time data, showing you everything from charging station availability to location details. With PromptQL, you can now interact with this powerful data in the most natural way possible: through a chat interface. Ask, chat, and get results instantly.

## The Problem: EV Charging Stations Are Hard to Find

For EV owners, charging stations aren’t as common as gas stations—yet. This scarcity often leads to anxiety and frustration, especially in unfamiliar areas. Navigating through an array of apps and websites, only to discover inaccurate, outdated, or incomplete information, can feel like searching for an oasis in a desert. For many drivers, this is a regular reality.

<b> The question that haunts every EV owner: Where do I charge next? </b>

## The Solution: Real-Time Chat with PromptQL and NREL

Imagine no more endless searching. With PromptQL, we created a sleek solution that allows users to interact with real-time EV charging station data effortlessly. By connecting directly to the NREL API, we’ve made it easy for drivers to query the nearest stations in a matter of seconds.

Now, when you're behind the wheel and the battery light flashes, all you need to do is chat. Ask PromptQL where the nearest charging stations are, and voilà! You’ll receive live, up-to-date information on charging stations in your vicinity—complete with their locations, types of connectors, and availability. No more guesswork, just results.

Here’s a sneak peek at how this works:

## Demo: See the Magic in Action

[Watch the demo]([https://github.com/jraviS2023/Hasura-JetashreeRavi-EVStations/blob/main/hasura_demo.mp4](https://youtu.be/xEPPMKCTtxU))

Just like that, you're armed with the information you need to get your battery back in action, no matter where you are.

## Challenges with Implementation: The Roadblocks We Overcame

Creating a seamless, real-time experience isn't as simple as flipping a switch. Here’s a look at the bumps we hit along the way:

- <b> Real-Time Data Accuracy: </b> The crux of the challenge lies in keeping the data fresh. EV stations can be offline, under maintenance, or temporarily unavailable, so ensuring that users receive the most up-to-date, reliable information was essential. We had to implement sophisticated error handling and data validation to make sure only accurate data made it into the chat interface.

## Further Improvements: What’s Next for EV Charging?

While this chat application is already a huge step forward, there’s always room for improvement. Here’s how we envision making it even better:

- <b> Personalized Recommendations: </b> Imagine if the app remembered your charging preferences—like preferred EV networks, charging speeds, or station amenities. By tracking your previous choices, the system could provide tailored recommendations, saving you time and energy on every drive.
- <b> Real-Time Availability Updates: </b> By integrating station occupancy data, users could instantly know if a charger is available or currently occupied. Think of it as checking a parking space before you arrive—except for your car’s battery.
- <b> Expanded Coverage: </b> While the NREL API is fantastic, there’s always more ground to cover. By integrating with additional data sources, such as regional charging networks or utility companies, we could create an even more comprehensive database.

## Getting Started

> [!NOTE]
> Before you begin, make sure you have the latest version of the DDN CLI installed. You can install the CLI by
> following the instructions in the [CLI documentation](https://promptql.hasura.io/docs/installation).

### Step 1. Update the CLI to the alpha release

```bash
ddn update-cli --version v2.12.0-alpha.2
```

### Step 2. Clone this repo

Using http:

```bash
git clone https://github.com/Hasura-JetashreeRavi-EVStations
```

or using ssh:

```bash
git clone git@github.com:Hasura-JetashreeRavi-EVStations
```

### Step 3. Set up your .env file

```bash
cd Hasura-JetashreeRavi-EVStations
cp .env.example .env
```

Add your Anthropic API key to the `.env` file:

```bash
echo "ANTHROPIC_API_KEY=your-anthropic-api-key" >> .env
```

> [!NOTE]
> You can generate an API key [here](https://console.anthropic.com/settings/keys).

### Step 4. Initialize a DDN project

```bash
ddn project init
```

### Step 5. Start PromptQL

First, create a build:

```bash
ddn supergraph build local
```

Then, start your local services:

```bash
ddn run docker-start
```

### Step 6. Open the console

In another terminal window, run the following command from your project's directory to open the console:

```bash
ddn console --local
```

### Step 7. Talk to NERL API!

From the console, try asking a question, like:

```plaintext
> XXX
```
