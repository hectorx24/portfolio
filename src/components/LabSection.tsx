import { useState, useEffect, useRef } from "react";
import { Terminal, Volume2, VolumeX, Sparkles, Dices, Sliders, Play, RotateCcw, ShieldCheck } from "lucide-react";

export function LabSection() {
  const [activeTab, setActiveTab] = useState<"terminal" | "audio" | "microsteps">("terminal");

  return (
    <section id="lab" className="py-28 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono-code text-xs uppercase tracking-widest text-cyan-400">
              LAB · Interactive Experiments
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Digital Lab &amp; Runtime Prototypes
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed">
            Hands-on prototypes derived from production engines. Try the D20 terminal game loop, listen to real Web Audio API procedural synthesis, or test cognitive task decomposition.
          </p>
        </div>

        {/* Experiment Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 self-start">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-mono-code transition-all ${
              activeTab === "terminal"
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Dices className="size-4" />
            <span>01. D20 RPG Engine</span>
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-mono-code transition-all ${
              activeTab === "audio"
                ? "bg-purple-500/15 text-purple-300 border border-purple-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sliders className="size-4" />
            <span>02. Web Audio DSP</span>
          </button>
          <button
            onClick={() => setActiveTab("microsteps")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-mono-code transition-all ${
              activeTab === "microsteps"
                ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="size-4" />
            <span>03. Microstep Decomposer</span>
          </button>
        </div>
      </div>

      {/* Main Experiment Viewport */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:p-8 backdrop-blur-xl relative overflow-hidden">
        {activeTab === "terminal" && <TerminalSimulator />}
        {activeTab === "audio" && <AudioSynthesizer />}
        {activeTab === "microsteps" && <MicrostepSimulator />}
      </div>
    </section>
  );
}

/* =========================================================================
   01. D20 RPG Terminal Simulator
   ========================================================================= */
function TerminalSimulator() {
  const [hp, setHp] = useState(24);
  const [gold, setGold] = useState(65);
  const [xp, setXp] = useState(120);
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<Array<{ role: "dm" | "player"; text: string; ascii?: string }>>([
    {
      role: "dm",
      text: "You stand before the obsidian arch of the Sunken Citadel. Pale green moss illuminates ancient runes engraved into the stone lintel. A heavy bronze door awaits.",
      ascii: `     [=== CITADEL GATE ===]
       /\\                  /\\
      /  \\  .-----------.  /  \\
     /____\\ |  [RUNES]  | /____\\
     |    | |  .=====.  | |    |
     | [] | |  | O O |  | | [] |
     |____|_|__|_____|__|_|____|`,
    },
  ]);

  const handleAction = (actionTitle: string, dc: number, rewardXp: number, hpDelta: number, asciiArt?: string) => {
    setIsRolling(true);
    setHistory((prev) => [...prev, { role: "player", text: `Action: ${actionTitle}` }]);

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 20) + 1;
      setLastRoll(roll);
      setIsRolling(false);

      const success = roll >= dc || roll === 20;
      let outcome = "";

      if (roll === 20) {
        outcome = `NATURAL 20! Critical Triumph! The runes glow blindingly gold as the mechanism yields without resistance. You discover an ancient silver cache (+${rewardXp * 2} XP, +25 Gold).`;
        setXp((x) => x + rewardXp * 2);
        setGold((g) => g + 25);
      } else if (roll === 1) {
        outcome = `CRITICAL FUMBLE! (Rolled 1). A hidden needle trap springs from the keystone! You take 4 poison damage.`;
        setHp((h) => Math.max(1, h - 4));
      } else if (success) {
        outcome = `Check Passed (${roll} vs DC ${dc}). You carefully decode the locking sequence. The heavy stone slab groans open. (+${rewardXp} XP).`;
        setXp((x) => x + rewardXp);
        if (hpDelta < 0) setHp((h) => Math.max(1, h + hpDelta));
      } else {
        outcome = `Check Failed (${roll} vs DC ${dc}). The rune repels your touch with a crackle of static discharge. (-2 HP).`;
        setHp((h) => Math.max(1, h - 2));
      }

      setHistory((prev) => [
        ...prev,
        {
          role: "dm",
          text: outcome,
          ascii: success ? asciiArt : undefined,
        },
      ]);
    }, 600);
  };

  return (
    <div className="font-mono-code text-xs md:text-sm">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-emerald-900/40 text-emerald-400">
        <div className="flex items-center gap-2">
          <Terminal className="size-4 text-emerald-400" />
          <span className="font-bold tracking-wider">DEEP_RPG_TERMINAL // v1.2</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>HP: <strong className="text-emerald-300">{hp}/30</strong></span>
          <span>GOLD: <strong className="text-amber-300">{gold}</strong></span>
          <span>XP: <strong className="text-cyan-300">{xp}</strong></span>
        </div>
      </div>

      {/* Screen Log */}
      <div className="bg-black/80 rounded-xl p-5 border border-emerald-950 max-h-[360px] overflow-y-auto space-y-4 shadow-inner crt-overlay">
        {history.map((entry, idx) => (
          <div key={idx} className={entry.role === "player" ? "text-cyan-300" : "text-emerald-400"}>
            <p className="leading-relaxed whitespace-pre-wrap">
              <span className="text-slate-600 mr-2">{entry.role === "player" ? "PLAYER >" : "DM >"}</span>
              {entry.text}
            </p>
            {entry.ascii && (
              <pre className="text-[10px] md:text-xs text-emerald-500/90 font-mono-code my-2 p-2 bg-emerald-950/20 rounded border border-emerald-900/30 overflow-x-auto">
                {entry.ascii}
              </pre>
            )}
          </div>
        ))}
        {isRolling && (
          <div className="text-amber-400 animate-pulse flex items-center gap-2">
            <Dices className="size-4 animate-spin" />
            <span>Calculating D20 physical trajectory...</span>
          </div>
        )}
      </div>

      {/* Roll & Controls */}
      <div className="mt-5 flex flex-wrap gap-2.5 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            disabled={isRolling}
            onClick={() =>
              handleAction(
                "Decipher ancient glyphs (Investigation DC 12)",
                12,
                35,
                0,
                `      [ GLYPH MATRIX DECODED ]
      .---.---.---.---.
      | α | β | γ | δ | -> ACCESS
      '---'---'---'---'`
              )
            }
            className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-600 transition-colors disabled:opacity-50"
          >
            1. Decipher Glyphs (DC 12)
          </button>
          <button
            disabled={isRolling}
            onClick={() =>
              handleAction(
                "Force open bronze gate (Athletics DC 15)",
                15,
                45,
                -2,
                `      [ HEAVY SLAB OPENED ]
         __________
        |  PORTAL  |  ====> [INTERIOR]
        |__________|`
              )
            }
            className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-600 transition-colors disabled:opacity-50"
          >
            2. Force Gate (DC 15)
          </button>
          <button
            disabled={isRolling}
            onClick={() =>
              handleAction(
                "Cast Arcane Sense (Arcana DC 10)",
                10,
                30,
                0
              )
            }
            className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-600 transition-colors disabled:opacity-50"
          >
            3. Arcane Sense (DC 10)
          </button>
        </div>

        {lastRoll !== null && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-800">
            <span className="text-slate-400 text-xs">Last D20:</span>
            <span
              className={`font-bold text-sm ${
                lastRoll === 20
                  ? "text-amber-400"
                  : lastRoll === 1
                  ? "text-red-400"
                  : "text-emerald-400"
              }`}
            >
              {lastRoll}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   02. Vanilla Web Audio API Synthesizer (BrainFocus AI DSP)
   ========================================================================= */
function AudioSynthesizer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundMode, setSoundMode] = useState<"brown" | "pink" | "binaural">("brown");
  const [volume, setVolume] = useState(0.25);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const activeNodesRef = useRef<{ stop: () => void } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const startSound = async () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContextClass();
      audioCtxRef.current = ctx;
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      // Analyser Node for Visualizer
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(analyser);
      analyser.connect(ctx.destination);

      if (soundMode === "brown") {
        // Brownian noise via buffer synthesis + 6dB/octave IIR lowpass
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5; // Gain compensation
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 400;

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        whiteNoise.start();

        activeNodesRef.current = {
          stop: () => {
            try { whiteNoise.stop(); } catch {}
          },
        };
      } else if (soundMode === "binaural") {
        // Pure stereo binaural beat: Left = 200 Hz, Right = 208 Hz (8 Hz Alpha wave)
        const oscL = ctx.createOscillator();
        const oscR = ctx.createOscillator();
        oscL.frequency.value = 200; // Carrier
        oscR.frequency.value = 208; // 8 Hz difference

        const merger = ctx.createChannelMerger(2);
        oscL.connect(merger, 0, 0); // Left channel
        oscR.connect(merger, 0, 1); // Right channel
        merger.connect(masterGain);

        oscL.start();
        oscR.start();

        activeNodesRef.current = {
          stop: () => {
            try {
              oscL.stop();
              oscR.stop();
            } catch {}
          },
        };
      } else {
        // Pink noise via Paul Kellet approximation
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          output[i] *= 0.11;
          b6 = white * 0.115926;
        }
        const pinkSource = ctx.createBufferSource();
        pinkSource.buffer = noiseBuffer;
        pinkSource.loop = true;
        pinkSource.connect(masterGain);
        pinkSource.start();

        activeNodesRef.current = {
          stop: () => {
            try { pinkSource.stop(); } catch {}
          },
        };
      }

      setIsPlaying(true);
      drawOscilloscope();
    } catch (err) {
      console.error("Audio API error:", err);
    }
  };

  const stopSound = () => {
    if (activeNodesRef.current) {
      activeNodesRef.current.stop();
      activeNodesRef.current = null;
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setIsPlaying(false);
  };

  const drawOscilloscope = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = "rgba(10, 15, 30, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = soundMode === "binaural" ? "#c7a4f5" : soundMode === "brown" ? "#f3d29b" : "#76d8d2";
      ctx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }

      ctx.stroke();
    };
    render();
  };

  useEffect(() => {
    return () => {
      stopSound();
    };
  }, []);

  return (
    <div className="font-mono-code text-xs md:text-sm">
      {/* Audio Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-900/40 text-purple-300">
        <div className="flex items-center gap-2">
          <Volume2 className="size-4 text-purple-400" />
          <span className="font-bold tracking-wider">BRAINFOCUS_DSP // PURE_WEB_AUDIO_API</span>
        </div>
        <span className="text-xs text-slate-400">ZERO EXTERNAL LIBRARIES · DIRECT BROWSER THREAD</span>
      </div>

      {/* Realtime Canvas Oscilloscope */}
      <div className="relative rounded-xl overflow-hidden bg-black/90 border border-slate-800 mb-6 flex flex-col items-center justify-center p-3">
        <canvas ref={canvasRef} width={640} height={120} className="w-full h-28 rounded" />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none">
            <span className="text-slate-400 text-xs">Audio thread idle · Click Play to start real synthesis</span>
          </div>
        )}
      </div>

      {/* Synthesis Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => {
            if (isPlaying) stopSound();
            setSoundMode("brown");
          }}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            soundMode === "brown"
              ? "bg-amber-950/30 border-amber-500/40 text-amber-300"
              : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <div className="font-bold text-sm">Brownian Noise</div>
          <p className="text-xs text-slate-400 mt-1">Deep 6dB/octave lowpass IIR filter for heavy soundproofing.</p>
        </button>

        <button
          onClick={() => {
            if (isPlaying) stopSound();
            setSoundMode("binaural");
          }}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            soundMode === "binaural"
              ? "bg-purple-950/30 border-purple-500/40 text-purple-300"
              : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <div className="font-bold text-sm">8Hz Alpha Binaural</div>
          <p className="text-xs text-slate-400 mt-1">Stereo phase shift: 200 Hz (L) &amp; 208 Hz (R) for relaxed alertness.</p>
        </button>

        <button
          onClick={() => {
            if (isPlaying) stopSound();
            setSoundMode("pink");
          }}
          className={`p-3.5 rounded-xl border text-left transition-all ${
            soundMode === "pink"
              ? "bg-cyan-950/30 border-cyan-500/40 text-cyan-300"
              : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          <div className="font-bold text-sm">Kellet Pink Noise</div>
          <p className="text-xs text-slate-400 mt-1">Balanced 1/f spectral density across the audible spectrum.</p>
        </button>
      </div>

      {/* Trigger & Volume Sliders */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <button
          onClick={isPlaying ? stopSound : startSound}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
            isPlaying
              ? "bg-red-500/20 text-red-300 border border-red-500/40 hover:bg-red-500/30"
              : "bg-purple-500 text-white hover:bg-purple-400 shadow-purple-500/20"
          }`}
        >
          {isPlaying ? (
            <>
              <VolumeX className="size-4" />
              <span>Halt Synthesizer</span>
            </>
          ) : (
            <>
              <Play className="size-4 fill-white" />
              <span>Engage {soundMode.toUpperCase()} Audio</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">Master Gain:</span>
          <input
            type="range"
            min="0.05"
            max="0.5"
            step="0.02"
            value={volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setVolume(val);
              if (audioCtxRef.current) {
                // Adjust live gain
              }
            }}
            className="w-28 accent-purple-400 cursor-pointer"
          />
          <span className="text-xs text-purple-300">{Math.round(volume * 200)}%</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   03. DualMind Microstep Decomposer Simulator
   ========================================================================= */
function MicrostepSimulator() {
  const [selectedTask, setSelectedTask] = useState<string>("Ship responsive Creator TV build to Chromecast");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const TASKS_PRESETS: Record<string, Array<{ text: string; time: string; frictionReduction: string }>> = {
    "Ship responsive Creator TV build to Chromecast": [
      { text: "Connect ADB shell over Wi-Fi and verify port 5555 authorization", time: "1 min", frictionReduction: "Validates connection before building" },
      { text: "Compile Vite web bundle into native assets directory", time: "2 min", frictionReduction: "Eliminates hot-reload state confusion" },
      { text: "Deploy signed APK to device and verify DPAD_CENTER remote focus", time: "3 min", frictionReduction: "Confirms keyboard suppression on real TV" },
    ],
    "Draft architecture for longitudinal personal memory": [
      { text: "Define TypeScript interface for DreamMemoryProfile counts", time: "2 min", frictionReduction: "Grounds abstract thoughts into strict types" },
      { text: "Write local store reducer that updates recurring archetype tags", time: "3 min", frictionReduction: "Creates isolated function with zero network dependency" },
      { text: "Inject top 3 recurring tags into conversational companion prompt", time: "2 min", frictionReduction: "Closes loop between archive and live chat" },
    ],
    "Clear overwhelming inbox & task backlog": [
      { text: "Pick strictly ONE urgent email and reply with 2 sentences", time: "1 min", frictionReduction: "Destroys blank-page friction instantly" },
      { text: "Archive all newsletters older than 7 days in single bulk click", time: "2 min", frictionReduction: "Clears visual noise without reading" },
      { text: "Write next 3 physical microsteps on paper, then close inbox", time: "2 min", frictionReduction: "Preserves momentum without context-switching" },
    ],
  };

  const steps = TASKS_PRESETS[selectedTask] || TASKS_PRESETS["Ship responsive Creator TV build to Chromecast"];

  const toggleStep = (idx: number) => {
    setCompletedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="font-mono-code text-xs md:text-sm">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-900/40 text-cyan-300">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-cyan-400" />
          <span className="font-bold tracking-wider">DUALMIND // RECURSIVE_MICROSTEP_ENGINE</span>
        </div>
        <span className="text-xs text-slate-400">HARD LIMIT: MAX 3 ACTIVE PRIORITIES</span>
      </div>

      {/* Preset Goal Selector */}
      <div className="mb-6">
        <label className="text-xs text-slate-400 block mb-2">Select a daunting goal to decompose:</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {Object.keys(TASKS_PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedTask(key);
                setCompletedSteps([]);
              }}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedTask === key
                  ? "bg-cyan-950/40 border-cyan-400/50 text-cyan-200"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <div className="line-clamp-2">{key}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Decomposed Atomic Steps */}
      <div className="space-y-3">
        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
          Decomposition Output (Friction-reduced atomic steps):
        </div>
        {steps.map((s, idx) => {
          const isDone = completedSteps.includes(idx);
          return (
            <div
              key={idx}
              onClick={() => toggleStep(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-4 ${
                isDone
                  ? "bg-slate-900/40 border-slate-800/80 opacity-60"
                  : "bg-slate-900/90 border-slate-800 hover:border-cyan-500/40"
              }`}
            >
              <div
                className={`mt-0.5 size-5 rounded-md border flex items-center justify-center transition-colors ${
                  isDone
                    ? "bg-cyan-500 border-cyan-400 text-black"
                    : "border-slate-600 bg-slate-950"
                }`}
              >
                {isDone && <ShieldCheck className="size-3.5 stroke-[3]" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-medium ${isDone ? "line-through text-slate-500" : "text-white"}`}>
                    {s.text}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                    {s.time}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-1">Cognitive rationale: {s.frictionReduction}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion status */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span>Progress: {completedSteps.length} of {steps.length} microsteps completed</span>
        <button
          onClick={() => setCompletedSteps([])}
          className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
        >
          <RotateCcw className="size-3.5" />
          <span>Reset checklist</span>
        </button>
      </div>
    </div>
  );
}
