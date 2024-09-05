'use client';

import { Background, Controls, ReactFlow, ReactFlowProps } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { useStructureViewport } from './use-structure-viewport';

const initialNodes = [
	{ id: 'eb', position: { x: -100, y: -100 }, data: { label: 'Извршен Одбор' } },
	{ id: 'mo', position: { x: 100, y: -130 }, data: { label: 'Комисија за Надзор' } },
	{ id: 'ga', position: { x: -100, y: 0 }, data: { label: 'Генерално Собрание' } },
	{ id: 'me', position: { x: 100, y: 0 }, data: { label: 'Членство' } },
	{ id: 'com', position: { x: -300, y: 30 }, data: { label: 'Останати Комисии и Работни Групи' } },
];
const initialEdges: ReactFlowProps['edges'] = [
	{ id: 'mo-eb', source: 'mo', target: 'eb', className: '[&>*]:!stroke-red-600', animated: true },
	{ id: 'mo-ga', source: 'mo', target: 'ga', className: '[&>*]:!stroke-red-600', animated: true },
	{ id: 'mo-me', source: 'mo', target: 'me', className: '[&>*]:!stroke-red-600', animated: true },
	{ id: 'mo-com', source: 'mo', target: 'com', className: '[&>*]:!stroke-red-600', animated: true },

	{ id: 'eb-ga', source: 'eb', target: 'ga', className: '[&>*]:!stroke-primary', animated: true },
	{ id: 'eb-me', source: 'eb', target: 'me', className: '[&>*]:!stroke-primary', animated: true },
	{ id: 'eb-com', source: 'eb', target: 'com', className: '[&>*]:!stroke-primary', animated: true },

	{ id: 'ga-com', source: 'ga', target: 'com', className: '[&>*]:!stroke-emerald-600', animated: true },
];

export function GeneralStructureDiagram() {
	const { viewport, setViewport } = useStructureViewport();

	return (
		<ReactFlow
			nodes={initialNodes}
			edges={initialEdges}
			viewport={viewport}
			onViewportChange={setViewport}
			proOptions={{
				hideAttribution: true,
			}}
			nodesDraggable>
			<Controls />
			<Background variant="dots" gap={20} size={2} />
		</ReactFlow>
	);
}