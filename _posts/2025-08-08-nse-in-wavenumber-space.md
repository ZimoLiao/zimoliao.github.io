---
layout: post
title: Navier-Stokes Equations in the Wavenumber Space
date: 2025-08-08
description: 
tags: turbulence
categories: notes
# giscus_comments: true
---


Consider a 3D turbulent fluid flow occupying a periodic cubic box of side length $L$. 
Any field variable $f(\boldsymbol{x})$, where $\boldsymbol{x}=(x_l),$ $x_l\in[0,L]$ for $l=1,2,3$, can be expanded in a Fourier series
$$
f(\boldsymbol{x})=\sum_{\boldsymbol{k}}\hat{f}(\boldsymbol{k})e^{i\boldsymbol{k}\cdot\boldsymbol{x}},\quad \boldsymbol{k}\in\frac{2\pi}{L}\mathbb{Z}^3.
$$
It follows that
$$
\nabla f=\sum_{\boldsymbol{k}}(i \boldsymbol{k})\hat{f}(\boldsymbol{k})e^{i\boldsymbol{k}\cdot\boldsymbol{x}},\quad \nabla^2 f=\sum_{\boldsymbol{k}}(-k^2)\hat{f}(\boldsymbol{k})e^{i\boldsymbol{k}\cdot\boldsymbol{x}},
$$
where $k\equiv|\boldsymbol{k}|=\sqrt{k_lk_l}$.

The incompressible Navier–Stokes equations (INSE) governing the turbulent velocity field $\boldsymbol{u}(\boldsymbol{x},t)$ are
$$
\partial_t\boldsymbol{u}+\boldsymbol{u}\cdot\nabla\boldsymbol{u}=-\nabla p+\nu \nabla^2\boldsymbol{u}+\boldsymbol{f}, \quad
\nabla\cdot\boldsymbol{u}=0.
$$
It can also be written in index form as
$$
\frac{\partial u_l}{\partial t}+u_m\frac{\partial u_l}{\partial x_m}=-\frac{\partial p}{\partial x_l}+\nu \frac{\partial^2 u_l}{\partial x_m x_m}+f_l,
$$
$$
\frac{\partial u_m}{\partial x_m}=0.
$$

Expanding $\boldsymbol{u}(\boldsymbol{x},t)$ and $p(\boldsymbol{x},t)$ into Fourier series, the equations in wavenumber space become
$$
\sum_{\boldsymbol{k}}\frac{\partial \hat{u}_l(\boldsymbol{k},t)}{\partial t}e^{i\boldsymbol{k}\cdot\boldsymbol{x}}
+\bigg(\sum_{\boldsymbol{p}}\hat{u}_m(\boldsymbol{p},t)e^{i\boldsymbol{p}\cdot\boldsymbol{x}}\bigg)\bigg(\sum_{\boldsymbol{q}}(i q_m)\hat{u}_l(\boldsymbol{q},t)e^{i\boldsymbol{q}\cdot\boldsymbol{x}}\bigg)
=
-\sum_{\boldsymbol{k}}(ik_l)\hat{p}(\boldsymbol{k},t)e^{i\boldsymbol{k}\cdot\boldsymbol{x}}
+\nu\sum_{\boldsymbol{k}}(-k^2)\hat{u}_l(\boldsymbol{k},t)e^{i\boldsymbol{k}\cdot\boldsymbol{x}}
+\sum_{\boldsymbol{k}}\hat{f}_l(\boldsymbol{k},t)e^{i\boldsymbol{k}\cdot\boldsymbol{x}},
$$
and
$$
\sum_{\boldsymbol{k}}(ik_m)\hat{u}_m(\boldsymbol{k},t)e^{i\boldsymbol{k}\cdot\boldsymbol{x}}=0.
$$
The nonlinear term can be rewritten as 
$$
\sum_{\boldsymbol{p}}\sum_{\boldsymbol{q}}(iq_m)\hat{u}_m(\boldsymbol{p},t)\hat{u}_l(\boldsymbol{q},t)e^{i(\boldsymbol{p}+\boldsymbol{q})\cdot\boldsymbol{x}}.
$$
We now focus on the coefficient of $e^{i\boldsymbol{k}\cdot\boldsymbol{x}}$ on both sides of the equation, which corresponds to the evolution equation for a single Fourier mode $\boldsymbol{k}$. 
To obtain the evolution for a single Fourier mode $\boldsymbol{k}$, apply the operator
$$
\mathcal{F}\{\,\cdot\,\}_{\boldsymbol{k}}\equiv\langle(\,\cdot\,)e^{-i\boldsymbol{k}\cdot\boldsymbol{x}}\rangle_L\equiv \frac{1}{L^3}\int_0^L\int_0^L\int_0^L(\,\cdot\,)e^{-i\boldsymbol{k}\cdot\boldsymbol{x}}\,\mathrm{d}\boldsymbol{x}.
$$ 
Using orthogonality of the modes, one finds
$$
\bigg(\frac{\partial }{\partial t}+\nu k^2\bigg)\hat{u}_l(\boldsymbol{k},t)
=
-ik_m\sum_{\boldsymbol{k}'}\hat{u}_m(\boldsymbol{k}-\boldsymbol{k}',t)\hat{u}_l(\boldsymbol{k}',t)
-ik_l\hat{p}(\boldsymbol{k},t)
+\hat{f}_l(\boldsymbol{k},t),
$$
and 
$$
ik_m\hat{u}_m(\boldsymbol{k},t)=0
$$
Here, the derivation of the quadratic nonlinear term has utilized the continuity equation and a variable substitution, $\boldsymbol{p}+\boldsymbol{k}'=\boldsymbol{k}$.

An intuition is, in wavenumber space, the velocity $\hat{\boldsymbol{u}}$ should be normal to the wavevector $\boldsymbol{k}$ due to the incompressible condition. Hence, it's natural to ask what will happen if we decompose INSE into two components -- one parallel to and one normal to $\boldsymbol{k}$.

Projecting (8) along $\boldsymbol{k}$ gives the pressure Poisson equation in wavenumber space
$$
0
=
-i\bigg(\frac{k_lk_n}{k^2}\bigg)k_m\sum_{\boldsymbol{k}'}\hat{u}_m(\boldsymbol{k}-\boldsymbol{k}',t)\hat{u}_n(\boldsymbol{k}',t)
-ik_l\hat{p}(\boldsymbol{k},t)
+\bigg(\frac{k_lk_n}{k^2}\bigg)\hat{f}_n(\boldsymbol{k},t),
$$
Imposing $({k_lk_n}/{k^2})\hat{f}_n(\boldsymbol{k},t)=0$ ensures divergence-free forcing for numerical simulations of forced incompressible homogeneous isotropic turbulence.

(8) minus (10), we have
$$
\bigg(\frac{\partial }{\partial t}+\nu k^2\bigg)\hat{u}_l(\boldsymbol{k},t)
=
-P_{ln}(\boldsymbol{k})(ik_m)\sum_{\boldsymbol{k}'}\hat{u}_m(\boldsymbol{k}-\boldsymbol{k}',t)\hat{u}_n(\boldsymbol{k}',t)
+P_{ln}(\boldsymbol{k})\hat{f}_n(\boldsymbol{k},t),
$$
here $P_{ln}(\boldsymbol{k})\equiv\delta_{ln}-{(k_lk_n)}/{k^2}$ is the projection tensor, and the pressure is canceled in this equation.

## Energy balance equation

We then drop the forcing term in (11), focusing on the intrinsic properties of the turbulent flows governed by INSE.
Particularly, we are concerned about how the kinetic energy is transfered in this system.
$$
\bigg(\frac{\partial }{\partial t}+2\nu k^2\bigg)\frac{1}{2}\hat{u}_l^*(\boldsymbol{k},t)\hat{u}_l(\boldsymbol{k},t)
=
-P_{ln}(\boldsymbol{k})(ik_m)\sum_{\boldsymbol{k}'}\hat{u}_m(\boldsymbol{k}-\boldsymbol{k}',t)\hat{u}_n(\boldsymbol{k}',t)\hat{u}_l^*(\boldsymbol{k},t)
$$
Here the superscript * denotes the complex conjugate.

Take the ensemble average of the above equation, we obtain the balance equation of kinetic energy, $\hat{E}(\boldsymbol{k},t)\equiv\langle\frac{1}{2}\hat{u}_l^*(\boldsymbol{k},t)\hat{u}_l(\boldsymbol{k},t)\rangle$
$$
\bigg(\frac{\partial }{\partial t}+2\nu k^2\bigg)\hat{E}(\boldsymbol{k},t)
=
k_mP_{ln}(\boldsymbol{k})\,\Im\bigg\{\sum_{\boldsymbol{k}'}\big\langle{\hat{u}_l(\boldsymbol{k},t)\hat{u}_m^*(\boldsymbol{k}-\boldsymbol{k}',t)\hat{u}_n^*(\boldsymbol{k}',t)}\big\rangle\bigg\}.
$$
$\hat{E}(\boldsymbol{k},t)$ is real-valued, so is the right-hand side. Thus we take its imaginary part, denoted by $\Im$.

We denote the right-hand side as $\hat{T}(\boldsymbol{k},t)$, and -- using the Hermitian symmetry of the real-valued velocity field, and a variable substitution -- it can also be expressed as
$$
\hat{T}(\boldsymbol{k},t)=k_mP_{ln}(\boldsymbol{k})\,\Im\bigg\{\sum_{\substack{\boldsymbol{p},\,\boldsymbol{q}  \boldsymbol{k}+\boldsymbol{p}+\boldsymbol{q}=0}}\big\langle{\hat{u}_l(\boldsymbol{k},t)\hat{u}_m(\boldsymbol{p},t)\hat{u}_n(\boldsymbol{q},t)}\big\rangle\bigg\} 
=\Im\bigg\{\sum_{\substack{\boldsymbol{p},\,\boldsymbol{q}  \boldsymbol{k}+\boldsymbol{p}+\boldsymbol{q}=0}}\big\langle{k_m\hat{u}_n(\boldsymbol{k},t)\hat{u}_m(\boldsymbol{p},t)\hat{u}_n(\boldsymbol{q},t)}\big\rangle\bigg\}
$$

When it is summed over all $\boldsymbol{k}$, we have
$$
\sum_{\boldsymbol{k}}\hat{T}(\boldsymbol{k},t)=\Im\bigg\{\sum_{\substack{\boldsymbol{k},\,\boldsymbol{p},\,\boldsymbol{q}  \boldsymbol{k}+\boldsymbol{p}+\boldsymbol{q}=0}}\big\langle{k_m\hat{u}_n(\boldsymbol{k},t)\hat{u}_m(\boldsymbol{p},t)\hat{u}_n(\boldsymbol{q},t)}\big\rangle\bigg\} 
=\Im\bigg\{\sum_{\substack{\boldsymbol{k},\,\boldsymbol{p},\,\boldsymbol{q}  \boldsymbol{k}+\boldsymbol{p}+\boldsymbol{q}=0}}\big\langle{-(p_m+q_m)\hat{u}_n(\boldsymbol{k},t)\hat{u}_m(\boldsymbol{p},t)\hat{u}_n(\boldsymbol{q},t)}\big\rangle\bigg\} 
=\Im\bigg\{\sum_{\substack{\boldsymbol{k},\,\boldsymbol{p},\,\boldsymbol{q}  \boldsymbol{k}+\boldsymbol{p}+\boldsymbol{q}=0}}\big\langle{-q_m\hat{u}_n(\boldsymbol{q},t)\hat{u}_m(\boldsymbol{p},t)\hat{u}_n(\boldsymbol{k},t)}\big\rangle\bigg\}=-\sum_{\boldsymbol{q}}\hat{T}(\boldsymbol{q},t)
$$

It is straightforward that the summation should be zero, 
$$
\sum_{\boldsymbol{k}}\hat{T}(\boldsymbol{k},t)=0,
$$
namely, this term merely represents a *transfer* of energy between modes.

## Reference

Batchelor, G. K. (1953). The theory of homogeneous turbulence, Cambridge university press.

McComb, W. D. (1992). The physics of fluid turbulence, Clarendon Press.

Frisch, U. and A. N. Kolmogorov (1995). Turbulence: The Legacy of A. N. Kolmogorov, Cambridge University Press.

Pope, S. B. (2000). Turbulent flows, Cambridge university press.