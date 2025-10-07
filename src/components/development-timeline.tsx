import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Link as LinkIcon, Zap, Cpu, Package, Factory, RefreshCcw, Rocket, CheckCircle, Code } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Proprietary Tech",
    date: "Phase 1",
    content: "Our proprietary technology provides the core foundation of every solution we build. Custom hardware and software designed specifically for unique requirements.",
    category: "Foundation",
    icon: Cpu,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Off-the-Shelf Modules",
    date: "Phase 2",
    content: "We carefully select the best off-the-shelf components to complement our proprietary technology, ensuring rapid development and lower risk.",
    category: "Integration",
    icon: Package,
    relatedIds: [1, 3, 4],
    status: "completed",
    energy: 95,
  },
  {
    id: 3,
    title: "Production Partners",
    date: "Phase 3",
    content: "Our network of production partners ensures quality manufacturing at scale, bringing designs to life with precision and efficiency.",
    category: "Manufacturing",
    icon: Factory,
    relatedIds: [1, 2, 4],
    status: "completed",
    energy: 90,
  },
  {
    id: 4,
    title: "Customer Discovery",
    date: "Sprint 1",
    content: "Working directly with customers to understand their needs and gather requirements. This phase sets the foundation for tailored solutions.",
    category: "Adaptation",
    icon: CheckCircle,
    relatedIds: [2, 3, 5],
    status: "in-progress",
    energy: 75,
  },
  {
    id: 5,
    title: "Prototype Build",
    date: "Sprint 2",
    content: "Rapid prototyping based on customer feedback. We build working models to test concepts and validate approaches quickly.",
    category: "Adaptation",
    icon: Code,
    relatedIds: [4, 6],
    status: "in-progress",
    energy: 65,
  },
  {
    id: 6,
    title: "Testing & Iteration",
    date: "Sprint 3",
    content: "Continuous testing and refinement with customer feedback integrated at every stage. We iterate until the solution is perfect.",
    category: "Adaptation",
    icon: RefreshCcw,
    relatedIds: [5, 7],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 7,
    title: "Market Launch",
    date: "Final Phase",
    content: "Ready to scale, produce, and launch. Your solution is optimized and prepared for successful market entry.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [6],
    status: "pending",
    energy: 85,
  },
];

// Simple UI components
function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${className}`}>
      {children}
    </div>
  );
}

function TimelineCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-lg border shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
}

function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
}

function TimelineCardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export default function DevelopmentTimeline() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-gray-700 border-gray-600";
      case "in-progress":
        return "text-gray-900 bg-gray-100 border-gray-300";
      case "pending":
        return "text-white bg-gray-500 border-gray-400";
      default:
        return "text-white bg-gray-500 border-gray-400";
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-gray-900 overflow-hidden relative"
      style={{ minHeight: '700px' }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center" style={{ minHeight: '700px' }}>
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex items-center justify-center z-10">
            <div className="absolute w-24 h-24 rounded-full border border-gray-600 animate-ping opacity-30"></div>
            <div
              className="absolute w-28 h-28 rounded-full border border-gray-700 animate-ping opacity-20"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-10 h-10 rounded-full bg-gray-200 backdrop-blur-md flex items-center justify-center">
              <span className="text-xs font-bold text-gray-900">WRLDS</span>
            </div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-gray-700 opacity-30"></div>
          <div className="absolute w-80 h-80 rounded-full border border-gray-700 opacity-20"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(156,163,175,0.3) 0%, rgba(156,163,175,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-gray-200 text-gray-900"
                      : isRelated
                      ? "bg-gray-400 text-gray-900"
                      : "bg-gray-800 text-gray-200"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-gray-300 shadow-lg shadow-gray-600"
                      : isRelated
                      ? "border-gray-300 animate-pulse"
                      : "border-gray-600"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={18} />
                </div>

                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-gray-200 scale-125" : "text-gray-400"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <TimelineCard className="absolute top-24 left-1/2 -translate-x-1/2 w-72 bg-gray-800 backdrop-blur-lg border-gray-700 shadow-xl overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-600"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-xs font-mono text-gray-400">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-gray-100">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <TimelineCardContent className="text-xs text-gray-300">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-gray-700">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center text-gray-400">
                            <Zap size={10} className="mr-1" />
                            Progress
                          </span>
                          <span className="font-mono text-gray-300">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-gray-500 to-gray-400"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-gray-700">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-gray-400 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-gray-400">
                              Connected Steps
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center h-6 px-2 py-0 text-xs border-gray-600 bg-transparent hover:bg-gray-700 text-gray-300 hover:text-gray-100 transition-all rounded-md border"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-gray-400" />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </TimelineCardContent>
                  </TimelineCard>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}